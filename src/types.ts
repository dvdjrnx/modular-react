export interface LocalPaymentMethod {
  provider: string;
  label: string;
}

export interface RemotePaymentMethod {
  name: string;
}

export interface RemotePaymentMethods {
  paymentMethods: [RemotePaymentMethod];
}

export interface DonationCheckboxProps {
  onChange: () => void;
  checked: boolean;
  content: string;
}
