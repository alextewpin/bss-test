import styles        from './styles.scss';

import Menu          from 'Menu';
import CardSelector  from 'CardSelector';
import Input         from 'Input';
import Textarea      from 'Textarea';
import Checkbox      from 'Checkbox';
import Button        from 'Button';

import Row           from '_utils/Row';

function Transfer () {
  return (
    <Row>
      <Menu
        title='Мои переводы'
        items={[
          {
            title: 'Между моими счетами и картами'
          },
          {
            title: 'Физическому лицу',
            isSelected: true
          },
          {
            title: 'Юридическому лицу'
          },
          {
            title: 'Индивидуальному предпринемателю'
          },
          {
            title: 'Платеж в бюджет'
          },
          {
            title: 'Перевод по номеру телефона'
          },
          {
            title: 'Мои шаблоны'
          }
        ]}/>
      <div styleName='content'>
        <div styleName='content-title'>Физическому лицу</div>
        <section styleName='content-section'>
          <CardSelector
            title='Источник'
            items={[
              {
                title: 'Любимая карта',
                amount: 381050,
                amountFractional: 87,
                currency: 'rub',
                type: 'Visa Gold',
                lastDigits: '4401'
              }
            ]}/>
        </section>
        <section styleName='content-section'>
          <Input
            title='ИНН плательщика'
            value='7704058987'/>
          <Input
            title='ФИО получателя'
            value='Евгений Анатольевич Горюнов'
            extra='Найти по номеру телефона'/>
          <Input
            title='Расчетный счет получателя'
            value='40101 810 8 000000 11111'
            placeholder='Введите номер расчетного счета'/>
          <Input
            title='ИНН получателя'
            value='7704058987'/>
          <Input
            title='Название банка'
            value='Альфа-Банк'
            placeholder='Введите название банка'
            extra='Выбрать из списка'/>
          <Input
            title='БИК банка'
            value='044583001'
            extra='Выбрать из списка'/>
        </section>
        <section styleName='content-section'>
          <Input
            title='Сумма перевода'
            value='150 000 ₽'
            type='amount'/>
        </section>
        <section styleName='content-section'>
          <Textarea title='Назначение платежа'/>
        </section>
        <section styleName='content-section'>
          <Checkbox
            title='Сохранить как шаблон'
            isChecked/>
          <Input
            value='Перевод другу'
            placeholder='Введите имя шаблона'
            isPartOfGroup/>
        </section>
        <section styleName='content-section'>
          <Checkbox
            title='Создать переодический платеж'/>
        </section>
        <section styleName='submit-section'>
          <Button value='Перевести деньги'/>
        </section>
      </div>
    </Row>
  );
}

export default ReactCSS(Transfer, styles);
