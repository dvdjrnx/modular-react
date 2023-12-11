import { useEffect, useState } from 'react';
import type { RemotePaymentMethod, RemotePaymentMethods } from '../types';
import { PaymentMethod } from '../models/PaymentMethod';

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const payInCash = new PaymentMethod({ name: 'cash' });

    const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
      if (methods.length === 0) {
        return [];
      }

      const extended: PaymentMethod[] = methods.map(
        (method) => new PaymentMethod(method)
      );
      extended.push(payInCash);

      return extended;
    };

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
        const { paymentMethods: methods }: RemotePaymentMethods =
          await response.json();

        setPaymentMethods(convertPaymentMethods(methods));
      } catch (error) {
        console.error(error);
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};
