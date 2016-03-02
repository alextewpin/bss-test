import styles from './styles.scss';

function Textarea ({ title }) {
  return (
    <div>
      <div>{title}</div>
      <textarea styleName='textarea'></textarea>
    </div>
  );
}

export default ReactCSS(Textarea, styles);
