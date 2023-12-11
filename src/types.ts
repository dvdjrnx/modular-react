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
