import styles from './styles.scss';

function Header ({ userFirstName = 'Александр', userLastName = 'Тюпин', userPhoto, nextPayment = 'Следующий платеж' }) {
  return (
    <div styleName='root'>
      <div styleName='user'>
        <div styleName='photo'>
          {userPhoto}
        </div>
        <div>
          <div styleName='username'>{userFirstName}</div>
          <div styleName='username'>{userLastName}</div>
          <a href='#' styleName='next-payment'>{nextPayment}</a>
          <div styleName='help'>
            <div styleName='help-icon'>?</div>
            <div styleName='help-text'>Помощь по интернет-банку</div>
          </div>
        </div>
      </div>
      <div styleName='logo'>
        <div styleName='logo-image'>Q</div>
        <div styleName='exit'>Завершение сессии</div>
        <div styleName='exit-counter'>2:00</div>
      </div>
    </div>
  );
}

export default ReactCSS(Header, styles);
