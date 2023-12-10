import { useEffect, useState } from 'react';
import { LocalPaymentMethod, RemotePaymentMethod } from './types';

export const Payment = ({ amount }: { amount: number }) => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'https://payment-methods1.p.rapidapi.com/payment-methods';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY as string,
          'X-RapidAPI-Host': 'payment-methods1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const { paymentMethods: methods }: RemotePaymentMethod =
          await response.json();

        if (methods.length > 0) {
          const extended: LocalPaymentMethod[] = methods.map((method) => ({
            provider: method.name,
            label: `Pay with ${method.name}`,
          }));
          extended.push({ provider: 'cash', label: 'Pay in cash' });
          setPaymentMethods(extended);
        } else {
          setPaymentMethods([]);
        }
      } catch (error) {
        console.error(error);
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <div>
      <h3>Payment</h3>
      <div>
        {paymentMethods.map((method) => (
          <label key={method.provider}>
            <input
              type='radio'
              name='payment'
              value={method.provider}
              defaultChecked={method.provider === 'cash'}
            />
            <span>{method.label}</span>
          </label>
        ))}
      </div>
      <button>${amount}</button>
    </div>
  );
};
