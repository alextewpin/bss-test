import { formatCurrency, formatDate, getCurrencySymbol } from '_utils/common';

import styles from './account.scss';

function Account (
  {
    title,
    funds,
    currency,
    accountFirstDigits,
    accountLastDigits,
    cardType,
    cardLastDigits,
    cardLastOperation,
    depositDescription,
    depositDate
  }) {
  let _extra;
  if (cardType && cardLastDigits) {
    _extra = `${cardType} *${cardLastDigits}`;
  } else if (accountFirstDigits && accountLastDigits) {
    _extra = `${accountFirstDigits} ... ${accountLastDigits}`;
  } else if (depositDescription && depositDate) {
    _extra = `${depositDescription} до ${formatDate(depositDate)}`;
  }

  return (
    <div styleName='root'>
      <div styleName='general'>
        <div styleName='title'>{title}</div>
        <div styleName='dots'>&nbsp;</div>
        <div styleName='funds'>{formatCurrency(funds)} {getCurrencySymbol(currency)}</div>
      </div>
      <div styleName='extra'>{_extra}</div>
      {(() => {
        if (cardLastOperation) {
          return (
            <div styleName='last-operation'>
              <span styleName='last-operation-amout'>
                +&nbsp;{formatCurrency(cardLastOperation.amount)}&nbsp;{getCurrencySymbol(cardLastOperation.currency)}
              </span> — {formatDate(cardLastOperation.date)}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default ReactCSS(Account, styles);
