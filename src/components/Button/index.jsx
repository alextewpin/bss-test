import styles from './styles.scss';

function Button ({ value = 'Кнопка' }) {
  return (
    <button styleName='root'>{value}</button>
  );
}

export default ReactCSS(Button, styles);
