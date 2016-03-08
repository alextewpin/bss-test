import styles from './styles.scss';

import Frame from '_utils/Frame';

class Spitfire extends React.Component {
  render () {
    return (
      <div styleName='root'>
        <div styleName='input'>
          <div styleName='input-header'>
            <span styleName='emoji'>🔥&nbsp;</span>Spitfire<span styleName='emoji'>&nbsp;🔥</span>
          </div>
          <textarea styleName='input-textarea' defaultValue='Some pre text' placeholder='Page layout'></textarea>
        </div>
        <div styleName='output'>
          <Frame/>
        </div>
      </div>
    );
  }
}

export default ReactCSS(Spitfire, styles);
