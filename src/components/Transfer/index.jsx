import styles from './transfer.scss';

function Transfer () {
  return (
    <div styleName='root'>
      <div styleName='input'>
        <input styleName='input-from' type='text' placeholder='Выберите источник' tabIndex={1}/>
        <div styleName='icons-from'>
          <a href='#' styleName='icon-more'>...</a>
        </div>
      </div>
      <div styleName='separator'></div>
      <div styleName='input'>
        <input styleName='input-to' type='text' placeholder='Выберите получателя' tabIndex={2}/>
        <div styleName='icons-to'>
          <a href='#' styleName='icon-more'>...</a>
          <a href='#' styleName='icon-mic'></a>
        </div>
      </div>
      <a href='#' styleName='submit'></a>
    </div>
  );
}

export default ReactCSS(Transfer, styles);
