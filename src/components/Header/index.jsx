import styles from './header.scss';

function Header ({ userFirstName, userLastName, userPhoto, nextPayment }) {
  return (
    <div styleName='root'>
      <div styleName='user'>
        <div styleName='photo'>
          {userPhoto}
        </div>
        <div>
          <div>{userFirstName}</div>
          <div>{userLastName}</div>
          <div>{nextPayment}</div>
          <div>
            <div>?</div>
            <div>Помощь по интернет-банку</div>
          </div>
        </div>
      </div>
      <div>
        <div>Q</div>
        <div>Завершение сессии</div>
        <div>2:00</div>
      </div>
    </div>
  );
}

export default ReactCSS(Header, styles);
