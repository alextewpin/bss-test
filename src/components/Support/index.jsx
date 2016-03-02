import styles from './styles.scss';

export default function Support ({ newMessages }) {
  return (
    <div styleName='root'>
      <a href='#' styleName='item'>
        <div styleName='item-icon-bg'>
          <i className='fa fa-comment fa-lg'></i>
          <div styleName='item-notification'>{newMessages}</div>
        </div>
        <div styleName='item-title'>Чат</div>
      </a>
      <a href='#' styleName='item'>
        <div styleName='item-icon-bg'>
          <i className='fa fa-envelope fa-lg'></i>
        </div>
        <div styleName='item-title'>Почта</div>
      </a>
      <a href='#' styleName='item'>
        <div styleName='item-icon-bg'>
          <i className='fa fa-microphone fa-lg'></i>
        </div>
        <div styleName='item-title'>Голос</div>
      </a>
    </div>
  );
}

export default ReactCSS(Support, styles);
