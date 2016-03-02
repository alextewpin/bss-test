import styles from './styles.scss';

import { formatCurrency, getCurrencySymbol } from '_utils/common';

function CardSelector ({ title, items }) {
  const card = items[0];
  return (
    <div>
      <div>{title}</div>
      <div styleName='card'>
        <div styleName='card-main'>
          <div styleName='card-header'>
            <div styleName='card-status'></div>
            <div styleName='card-title'>{card.title}</div>
            <div styleName='card-change'>Изменить</div>
          </div>
          <div styleName='card-amount'>
            <span>{formatCurrency(card.amount)}</span>.
            <span styleName='card-amount-fractional'>{card.amountFractional}</span>&nbsp;
            <span>{getCurrencySymbol(card.currency)}</span>
          </div>
        </div>
        <div styleName='card-extra'>{card.type} *{card.lastDigits}</div>
      </div>
    </div>
  );
}

export default ReactCSS(CardSelector, styles);
