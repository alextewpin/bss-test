import styles from './styles.scss';

function Checkbox ({ title, isChecked = false }) {
  return (
    <div styleName='root'>
      <div styleName='checkbox'>
        <div styleName={`checkbox-check_is-checked_${isChecked}`}>
          <i className='fa fa-check' styleName='checkbox-icon'></i>
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
}

export default ReactCSS(Checkbox, styles);
