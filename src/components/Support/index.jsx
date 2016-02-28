import styles from './support.scss';

export default function Support ({ newMessages }) {
  return (
    <div styleName='root'>
      <a href='#' styleName='item'>
        <div styleName='item-icon'>
          <div styleName='item-notification'>{newMessages}</div>
        </div>
        <div styleName='item-title'>Чат</div>
      </a>
      <a href='#' styleName='item'>
        <div styleName='item-icon'></div>
        <div styleName='item-title'>Почта</div>
      </a>
      <a href='#' styleName='item'>
        <div styleName='item-icon'></div>
        <div styleName='item-title'>Голос</div>
      </a>
    </div>
  );
}

export default ReactCSS(Support, styles);
