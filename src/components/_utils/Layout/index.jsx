import styles from './styles.scss';

function Layout ({ children }) {
  return (
    <div styleName='root'>
      {children}
    </div>
  );
}

export default ReactCSS(Layout, styles);
