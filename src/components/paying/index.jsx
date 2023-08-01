import React from 'react'
import c from './makingOrder.module.scss'
import { CloudPayments } from 'cloudpayments/dist/Client';
import axios from 'axios';

const Paying = ({summa, summaWithDelivering, delivering, discount}) => {
    const [ paymentStatus, setPaymentStatus ] = React.useState('')
    const withPercent = Number(summaWithDelivering) / 100 * Number(discount)
//   const allSumma = String(summaWithDelivering - withPercent)
    const allSumma = 200

    const pay = async () => {
        try {
          const API_PUBLIC_ID = 'pk_a3aadf55a77fa83df968aba58d521';
          const paymentData = {
            amount: allSumma, // Сумма платежа
            currency: 'RUB',
            accountId: '1',
            description: 'Описание платежа',
            // Другие необходимые параметры для платежа...
          };
    
          const response = await axios.post(`https://api.cloudpayments.ru/payments/cards/charge`, paymentData, {
            headers: {
              Authorization: `Basic ${btoa(API_PUBLIC_ID)}`,
            },
          });
    
          if (response.status === 200) {
            setPaymentStatus('Платеж успешно проведен!');
            // Обработка успешного платежа...
          } else {
            setPaymentStatus('Произошла ошибка при платеже.');
            // Обработка ошибки платежа...
          }
        } catch (error) {
          console.error('Ошибка при выполнении платежа:', error);
        }
    };

  return (
    <div className={c.makingOrder}>
        <div className={c.up}>
            <button
                className={c.disabled}
                onClick={() => pay()}
            >
                Оплатить картой онлайн
            </button>
            <h3>
                <span>Общая стоимость</span>
                {
                    allSumma?.length === 4 ? 
                    `${allSumma?.slice(0, 1)} ${allSumma?.slice(1, allSumma?.length)}` 
                    : allSumma?.length === 5 ?
                    `${allSumma?.slice(0, 2)} ${allSumma?.slice(2, allSumma?.length )}` 
                    : allSumma?.length === 6 ?
                    `${allSumma?.slice(0, 3)} ${allSumma?.slice(3, allSumma?.length )}` : 
                    allSumma
                } ₽
            </h3>
        </div>
        <div className={c.line1}></div>
        <div className={c.cart}>
            <h3 className={c.title}>Ваша корзина</h3>
            <div className={c.prices}>
                <p>
                    <span>Товары</span>
                    {
                        summa?.length === 4 ? 
                        `${summa?.slice(0, 1)} ${summa?.slice(1, summa?.length)}` 
                        : summa?.length === 5 ?
                        `${summa?.slice(0, 2)} ${summa?.slice(2, summa?.length )}` 
                        : summa?.length === 6 ?
                        `${summa?.slice(0, 3)} ${summa?.slice(3, summa?.length )}` 
                        : summa
                    } ₽
                </p>
                <p>
                    <span>Доставка</span>
                    {delivering} ₽
                </p>
                <p>
                    <span>Скидка</span>
                    {discount} %
                </p>
            </div>
        </div>
        <div className={c.line}></div>
        <h3>
            <span>Общая стоимость</span>
            {
                allSumma?.length === 4 ? 
                `${allSumma?.slice(0, 1)} ${allSumma?.slice(1, allSumma?.length)}` 
                : allSumma?.length === 5 ?
                `${allSumma?.slice(0, 2)} ${allSumma?.slice(2, allSumma?.length )}` 
                : allSumma?.length === 6 ?
                `${allSumma?.slice(0, 3)} ${allSumma?.slice(3, allSumma?.length )}` : 
                allSumma
            } ₽
        </h3>
    </div>
  )
}

export default Paying