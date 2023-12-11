import type { LocalPaymentMethod } from '../types';

export const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) => (
  <>
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
  </>
);
