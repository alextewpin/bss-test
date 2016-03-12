import styles from './styles.scss';

import Frame from '_utils/Frame';

const defaultData = 'Header\nTransfer\nRow\nMenu\ng\nЗаголовок страницы\nInput\nInput\nЗаголовок блока\nКонтейнер\nCheckbox\nCheckbox\n/Контейнер\nButton\n/g\n/Row\nFooter'; // eslint-disable-line max-len

class Spitfire extends React.Component {
  constructor (props) {
    super(props);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  state = {
    data: this.makeOutputBlock(defaultData)
  }

  getTagPair (blockArray) {
    let childTag = '';
    let childOpenIndex = -1;
    let childCloseIndex = -1;
    blockArray.some((item, i) => {
      if (item[0] === '/') {
        childTag = item.substring(1);
        childCloseIndex = i;
        return true;
      }
    });
    blockArray.forEach((item, i) => {
      if (item === childTag && i < childCloseIndex) {
        childOpenIndex = i;
      }
    });
    if (childTag && childOpenIndex === -1) {
      // console.log(`У парного тега ${childTag} не найдена пара`);
    }
    return { childTag, childOpenIndex, childCloseIndex };
  }

  makeOutputBlock (rawString) {
    const blockArray = this.makeTagLayer(this.makeBlockArrayFromString(rawString));
    return {
      element: 'Layout',
      children: blockArray
    };
  }

  makeTagLayer (blockArray) {
    let layerBlockArray = blockArray;
    let { childTag, childOpenIndex } = this.getTagPair(blockArray);
    while (childTag && childOpenIndex >= 0) {
      layerBlockArray = this.makeTagBlock(blockArray);
      ({ childTag, childOpenIndex } = this.getTagPair(blockArray));
    }
    return layerBlockArray;
  }

  makeBlockArrayFromString (rawString) {
    return rawString.split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0);
  }

  makeTagBlock (blockArray) {
    const { childTag, childOpenIndex, childCloseIndex } = this.getTagPair(blockArray);
    if (childTag && childOpenIndex >= 0) {
      const childBlock = blockArray.splice(childOpenIndex, childCloseIndex - childOpenIndex + 1);
      childBlock.shift();
      childBlock.pop();
      const childBlockObject = {
        element: childTag,
        children: this.makeTagLayer(childBlock)
      };
      blockArray.splice(childOpenIndex, 0, childBlockObject);
    }
    return blockArray;
  }

  handleTextareaChange (e) {
    this.setState({
      data: this.makeOutputBlock(e.target.value)
    });
  }

  render () {
    return (
      <div styleName='root'>
        <div styleName='input'>
          <div styleName='input-header'>
            <span styleName='emoji'>🔥&nbsp;</span>Spitfire<span styleName='emoji'>&nbsp;🔥</span>
          </div>
          <textarea
            styleName='input-textarea'
            wrap='off'
            placeholder='Page layout'
            defaultValue={defaultData}
            onChange={this.handleTextareaChange}/>
        </div>
        {// <div>{JSON.stringify(this.state.parsedData)}</div>
        }
        <div styleName='output'>
          <Frame data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default ReactCSS(Spitfire, styles);
