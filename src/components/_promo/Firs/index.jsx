import styles from './firs.scss';

function Firs () {
  return (
    <div styleName='root'>
      <div styleName='banner'>
        <div styleName='title'>Зарабатывай больше</div>
        <div styleName='income'>+ 25 000&nbsp;<span styleName='income-currency'>₽</span></div>
        <div styleName='p'>
          За последние 3 месяца на вашем счету было не менее <span styleName='strong'>400 000 ₽.</span>
        </div>
        <div styleName='p'>
          Депозит «Ёлочки» позволит увеличить ваш счет на <span styleName='strong'>25 000 ₽</span> за 5 месяцев.
        </div>
        <div styleName='p'>
          При открытии депозита к общей сумме вклада прибавится 16%.
        </div>
        <a href='#' styleName='signup'>Открыть депозит «Ёлочки»</a>
      </div>
    </div>
  );
}

export default ReactCSS(Firs, styles);
