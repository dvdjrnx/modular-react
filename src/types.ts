export interface LocalPaymentMethod {
  provider: string;
  label: string;
}

export interface RemotePaymentMethod {
  paymentMethods: [
    {
      id: string;
      name: string;
    }
  ];
}
