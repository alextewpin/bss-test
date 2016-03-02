import { formatCurrency, getCurrencySymbol } from '_utils/common';

import styles from './funds.scss';

function Funds ({ funds, fundsFractional, currency }) {
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
        <span styleName='funds-whole'>{formatCurrency(funds)}.</span>
        <span styleName='funds-fractional'>{fundsFractional}</span>
        <span styleName='currency'>&nbsp;{getCurrencySymbol(currency)}</span>
      </div>
    </div>
  );
}

export default ReactCSS(Funds, styles);
