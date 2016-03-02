import styles from './styles.scss';

function Button ({ value }) {
  return (
    <button styleName='root'>{value}</button>
  );
}

export default ReactCSS(Button, styles);
