import { formatCurrency, formatDate, getCurrencySymbol } from '_utils/common';

import styles from './transaction.scss';

function Transaction ({ title, amount, currency, action, date }) {
  return (
    <div styleName='root'>
      Transaction
    </div>
  );
}

export default ReactCSS(Transaction, styles);
