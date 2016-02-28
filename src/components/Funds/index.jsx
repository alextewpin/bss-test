import styles from './funds.scss';

function Funds ({ fundsWhole, fundsFractional, currency }) {
  let currencySymbol = '';
  switch (currency.toLowerCase()) {
    case 'rub':
      currencySymbol = '₽';
      break;
    default:
      currencySymbol = currency;
  }
  return (
    <div styleName='root'>
      <div styleName='header'>
        <div styleName='title'>Доступные средства</div>
        <a href='#' styleName='refresh'>
          <div>Обновить</div>
          <div styleName='refresh-icon'></div>
        </a>
      </div>
      <div styleName='funds'>
        <span styleName='funds-whole'>{fundsWhole.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}.</span>
        <span styleName='funds-fractional'>{fundsFractional}</span>
        <span styleName='currency'>&nbsp;{currencySymbol}</span>
      </div>
    </div>
  );
}

export default ReactCSS(Funds, styles);
