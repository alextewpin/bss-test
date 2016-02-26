import Header            from 'Header';
import Nav               from 'Nav';
import Transfer          from 'Transfer';
import Funds             from 'Funds';
import Support           from 'Support';
import Accounts          from 'Accounts';
import Cards             from 'Cards';
import Deposits          from 'Deposits';
import AccountStatement  from 'AccountStatement';
import UpcomingPayments  from 'UpcomingPayments';

import PromoFirs         from 'promo/Firs';

import Row               from 'utils/Row';
import Column            from 'utils/Column';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          userName='Александр Олегович Тюпин'
          userPhoto=''
          nextPayment='Не забыть заплатить за садик'/>
        <Nav
          items={['Карты', 'Счета', 'Кредиты', 'Вклады', 'Платежи', 'Переводы', 'Выход']}/>
        <Transfer/>
        <Row>
          <Funds
            funds={134651123}
            currency='rub'/>
          <Support
            newMessages={2}/>
        </Row>
        <Row>
          <PromoFirs/>
          <Column>
            <Accounts
              items={[
                {
                  title: 'Основной счет',
                  funds: 432780,
                  currency: 'rub'
                },
                {
                  title: 'Счет в долларах',
                  funds: 600,
                  currency: 'usd'
                }
              ]}/>
            <Cards
              items={[
                {
                  title: 'Любимая карта',
                  type: 'Visa Gold',
                  funds: 150000,
                  currency: 'rub',
                  lastDigits: 4401
                },
                {
                  title: 'Кредитная карта',
                  type: 'Master Card',
                  funds: 60000,
                  currency: 'usd',
                  lastDigits: 4960,
                  lastOperation: {
                    amount: 1200,
                    currency: 'rub',
                    date: '2015-11-27'
                  }
                }
              ]}/>
            <Deposits
              items={[
                {
                  title: '',
                  funds: 550000,
                  description: '11% годовых',
                  date: '2023-12-27'
                }
              ]}/>
          </Column>
        </Row>
        <Row>
          <AccountStatement
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
                date: '2015-11-19T10:11:31',
                amount: 400000,
                currency: 'rub'
              },
              {
                title: 'ООО «Штормовое предупреждение»',
                date: '2015-11-19T13:09:12',
                amount: -7500,
                currency: 'rub'
              }
            ]}/>
          <UpcomingPayments
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
      </div>
    );
  }
}
