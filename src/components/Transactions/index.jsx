import Transaction from 'Transaction';

import styles from './transactions.scss';

function Transactions ({ title, items }) {
  return (
    <div styleName='root'>
      <div styleName='title'>{title}</div>
      <div>
        {items.map((item, i) => {
          return <Transaction key={i} {...item}/>;
        })}
      </div>
    </div>
  );
}

export default ReactCSS(Transactions, styles);
