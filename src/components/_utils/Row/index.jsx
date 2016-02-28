import styles from './row.scss';

export default function Row ({ children }) {
  return (
    <div styleName='root'>{children}</div>
  );
}

export default ReactCSS(Row, styles);
