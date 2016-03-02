import styles from './menu.scss';

function Menu ({ title, items }) {
  return (
    <div styleName={'root'}>
      <div styleName='title'>{title}</div>
      <div styleName='list'>
        {items.map((item, i) => {
          const isSelected = item.isSelected || 'false';
          return <div key={i} styleName={`item_is-selected_${isSelected}`}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default ReactCSS(Menu, styles);
