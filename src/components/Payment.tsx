import { usePaymentMethods } from '../hooks/usePaymentMethods';
import { useRoundUp } from '../hooks/useRoundUp';
import { DonationCheckbox } from './DonationCheckbox';
import { PaymentMethods } from './PaymentMethods';

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount);

  const formatCheckboxLabel = (agreeToDonate: boolean, tip: number) => {
    return agreeToDonate
      ? 'Thanks for your donation.'
      : `I would like to donate $${tip} to charity.`;
  };

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip)}
      />
      <button>${total}</button>
    </div>
  );
};
