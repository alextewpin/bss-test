import styles from './row.scss';

export default function Row ({ margin = 'm', children }) {
  return (
    <div styleName={`root_margin_${margin}`}>{children}</div>
  );
}

export default ReactCSS(Row, styles);
