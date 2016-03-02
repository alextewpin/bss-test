import Transaction from 'Transaction';

import styles from './styles.scss';

function Transactions ({ title, items, type, width = 'full' }) {
  return (
    <div styleName={`root_width_${width}`}>
      <div styleName='title'>{title}</div>
      <div>
        {items.map((item, i) => {
          return <Transaction key={i} {...item} type={type}/>;
        })}
      </div>
    </div>
  );
}

export default ReactCSS(Transactions, styles);
