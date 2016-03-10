import styles from './styles.scss';

function Input ({ type, title = 'Инпут', value, placeholder = 'Введите значение', extra, isPartOfGroup = false }) {
  let _content;
  const _inputStyleName = `input_is-part-of-group_${isPartOfGroup}`;
  switch (type) {
    case 'amount':
      _content = (
        <div>
          <div styleName='header'>
            <div>Сумма перевода</div>
            <div styleName='currency-selector'>
              <div styleName='currency_is-selected_false'>Рубли</div>
              <div styleName='currency_is-selected_true'>Доллары</div>
              <div styleName='currency_is-selected_false'>Евро</div>
            </div>
          </div>
          <div styleName={_inputStyleName}>
            <input styleName='input-field_size_l' placeholder='Введите сумму перевода' defaultValue={value}/>
          </div>
          <div styleName='conversion'>
            <div>
              <div>
                Сумма зачисления в долларах по курсу банка —&nbsp;
                <span styleName='conversion-amount'>2167.
                  <span styleName='conversion-amount-fractional'>19</span>&nbsp;$
                </span>
              </div>
              <div styleName='conversion-commission'>Комиссия банка 10% —&nbsp;
                <span styleName='conversion-amount'>216.
                  <span styleName='conversion-amount-fractional'>79</span>&nbsp;$
                </span>
              </div>
            </div>
            <div styleName='conversion-rate'>
              1$ = 69.<span styleName='conversion-rate-fractional'>204</span>&nbsp;₽
            </div>
          </div>
        </div>
      );
      break;
    default:
      _content = (
        <div>
          {(() => {
            if (title) {
              return <div>{title} <span styleName='star'>*</span></div>;
            }
          })()}
          <div styleName={_inputStyleName}>
            <input styleName='input-field_size_m' placeholder={placeholder} defaultValue={value}/>
            <div styleName='extra'>{extra}</div>
          </div>
        </div>
      );
  }

  return (
    <div styleName={`root_is-part-of-group_${isPartOfGroup}`}>
      {_content}
    </div>
  );
}

export default ReactCSS(Input, styles);
