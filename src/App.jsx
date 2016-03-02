import Header    from 'Header';
import Nav       from 'Nav';
import Transfer  from 'Transfer';
import Footer    from 'Footer';

import Layout    from '_utils/Layout';

export default function App ({ children }) {
  return (
    <Layout>
      <Header
        userFirstName='Александр'
        userMiddleName='Олегович'
        userLastName='Тюпин'
        userPhoto=''
        nextPayment='Не забыть заплатить за садик'/>
      <Nav
        items={['Карты', 'Счета', 'Кредиты', 'Вклады', 'Платежи', 'Переводы', 'Выход']}/>
      <Transfer/>
      {children}
      <Footer/>
    </Layout>
  );
}
