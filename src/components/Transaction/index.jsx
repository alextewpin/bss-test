import { formatCurrency, formatDate, getCurrencySymbol } from '_utils/common';

import styles from './transaction.scss';

function Transaction ({ type, title, amount, currency, action, date }) {
  let _title;
  let _amount;
  let _amountStyleName;
  let _additional;
  switch (type) {
    case 'upcoming':
      _title = title;
      _amount = `${formatCurrency(amount)} ${getCurrencySymbol(currency)}`;
      _amountStyleName = `amount_style_upcoming`;
      _additional = `${action} до ${formatDate(date)}`;
      break;
    case 'last':
      _title = formatDate(date);
      _amount = `${formatCurrency(amount, true)} ${getCurrencySymbol(currency)}`;
      if (amount >= 0) {
        _amountStyleName = `amount_style_plus`;
      } else {
        _amountStyleName = `amount_style_minus`;
      }
      _additional = title;
      break;
    default:
  }
  return (
    <div styleName='root'>
      <div styleName='general'>
        <div styleName='title'>{_title}</div>
        <div styleName='dots'>&nbsp;</div>
        <div styleName={_amountStyleName}>{_amount}</div>
      </div>
      <div styleName='additional'>{_additional}</div>
    </div>
  );
}

export default ReactCSS(Transaction, styles);
