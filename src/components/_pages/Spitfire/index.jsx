import styles from './styles.scss';

import Frame from '_utils/Frame';

class Spitfire extends React.Component {
  constructor (props) {
    super(props);
    this.parseTextarea = this.parseTextarea.bind(this);
  }

  state = {
    parsedData: {
      element: 'Layout',
      children: []
    }
  }

  parseBlock (blockSource) {
    const blockArray = blockSource.split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    return blockArray;
  }

  parseTextarea (e) {
    const basicData = {
      element: 'Layout',
      children: this.parseBlock(e.target.value)
    };
    this.setState({
      parsedData: basicData
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
            placeholder='Page layout'
            onChange={this.parseTextarea}/>
        </div>
        {// <div>{JSON.stringify(this.state.parsedData)}</div>
        }
        <div styleName='output'>
          <Frame data={this.state.parsedData}/>
        </div>
      </div>
    );
  }
}

export default ReactCSS(Spitfire, styles);
