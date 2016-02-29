import Header        from 'Header';
import Nav           from 'Nav';
import Transfer      from 'Transfer';
import Funds         from 'Funds';
import Support       from 'Support';
import Accounts      from 'Accounts';
import Transactions  from 'Transactions';
import Footer        from 'Footer';

import PromoFirs     from '_promo/Firs';

import Layout        from '_utils/Layout';
import Row           from '_utils/Row';

export default class App extends React.Component {
  render () {
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
        <Row>
          <Funds
            fundsWhole={1346511}
            fundsFractional={23}
            currency='rub'/>
          <Support
            newMessages={2}/>
        </Row>
        <Row>
          <PromoFirs/>
          <div>
            <Accounts
              title='Счета'
              items={[
                {
                  title: 'Основной счет',
                  funds: 432780,
                  currency: 'rub',
                  accountFirstDigits: '40817',
                  accountLastDigits: '04960'
                },
                {
                  title: 'Счет в долларах',
                  funds: 600,
                  currency: 'usd',
                  accountFirstDigits: '40817',
                  accountLastDigits: '04961'
                }
              ]}/>
            <Accounts
              title='Карты'
              items={[
                {
                  title: 'Любимая карта',
                  funds: 150000,
                  currency: 'rub',
                  cardType: 'Visa Gold',
                  cardLastDigits: '4401'
                },
                {
                  title: 'Кредитная карта',
                  funds: 60000,
                  currency: 'usd',
                  cardType: 'Master Card',
                  cardLastDigits: '4960',
                  cardLastOperation: {
                    amount: 1200,
                    currency: 'rub',
                    date: '2015-11-27'
                  }
                }
              ]}/>
            <Accounts
              title='Вклады'
              items={[
                {
                  title: 'Большой дом',
                  funds: 550000,
                  currency: 'rub',
                  depositDescription: '11% годовых',
                  depositDate: '2023-12-27'
                }
              ]}/>
          </div>
        </Row>
        <Row margin='l'>
          <Transactions
            title='Последние операции'
            type='last'
            width='compact'
            items={[
              {
                title: 'Настин садик',
                date: '2015-11-19T09:41:02',
                amount: -25100,
                currency: 'rub'
              },
              {
                title: 'Занятия по английскому',
                date: '2015-11-18T19:39:23',
                amount: -1000,
                currency: 'rub'
              },
              {
                title: 'Пополнение карты\nVisa Classic *3445',
                date: '2015-11-17T10:11:31',
                amount: 400000,
                currency: 'rub'
              },
              {
                title: 'ООО «Штормовое предупреждение»',
                date: '2015-11-16T13:09:12',
                amount: -7500,
                currency: 'rub'
              }
            ]}/>
          <Transactions
            title='Предстоящие платежи'
            type='upcoming'
            items={[
              {
                title: 'Настин садик',
                action: 'Заплатить',
                date: '2015-10-31',
                amount: 25000,
                currency: 'rub'
              },
              {
                title: 'Деньги для мамы',
                action: 'Заплатить',
                date: '2015-11-14',
                amount: 32000,
                currency: 'rub'
              },
              {
                title: 'Занятия по английскому',
                action: 'Заплатить',
                date: '2015-11-14',
                amount: 1800,
                currency: 'rub'
              }
            ]}/>
        </Row>
        <Footer/>
      </Layout>
    );
  }
}
