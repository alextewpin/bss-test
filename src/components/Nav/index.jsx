import styles from './styles.scss';

function Nav ({ items = ['Карты', 'Счета', 'Кредиты', 'Вклады', 'Платежи', 'Переводы', 'Выход'] }) {
  return (
    <div styleName='root'>
      {items.map((item, i) => {
        return <a href='#' key={i} styleName='item'>{item}</a>;
      })}
    </div>
  );
}

export default ReactCSS(Nav, styles);
