import styles from './styles.scss';

const defaultMenuItems = [
  {
    title: 'Первый пункт меню',
    isSelected: true
  },
  {
    title: 'Второй'
  },
  {
    title: 'И третий'
  }
];

function Menu ({ title = 'Меню', items = defaultMenuItems }) {
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
