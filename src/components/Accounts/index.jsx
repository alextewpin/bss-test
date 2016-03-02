import Account from 'Account';

import styles from './styles.scss';

function Accounts ({ title, items }) {
  return (
    <div styleName='root'>
      <div styleName='title'>{title}</div>
      <div>
        {items.map((item, i) => {
          return <Account key={i} {...item}/>;
        })}
      </div>
    </div>
  );
}

export default ReactCSS(Accounts, styles);
