import type { IAddressItem } from './address';

// ----------------------------------------------------------------------

export type ICheckoutItem = {
  id: string;
  name: string;
  coverUrl: string;
  available: number;
  price: number;
  variants: {
    colors?: string[];
    size?: string;
    memory?: string
  },
  quantity: number;
  subTotal: number;
};

export type ICheckoutDeliveryOption = {
  value: number;
  label: string;
  description: string;
};

export type ICheckoutPaymentOption = {
  value: string;
  label: string;
  description: string;
};

export type ICheckoutCardOption = {
  value: string;
  label: string;
};

export type ICheckoutState = {
  total: number;
  subTotal: number;
  discount: number;
  activeStep: number;
  totalItems: number;
  items: ICheckoutItem[];
  shippingCharge: number;
  billingAddress: IAddressItem | null;
  shippingAddress: IAddressItem | null;
};

export type CheckoutContextValue = ICheckoutState & {
  canReset: boolean;
  onReset: () => void;
  onUpdate: (updateValue: Partial<ICheckoutState>) => void;
  onUpdateField: (
    name: keyof ICheckoutState,
    updateValue: ICheckoutState[keyof ICheckoutState]
  ) => void;
  //
  completed: boolean;
  //
  onAddToCart: (newItem: ICheckoutItem) => void;
  onDeleteCart: (itemId: string) => void;
  //
  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;
  //
  activeStep: number;
  initialStep: () => void;
  onBackStep: () => void;
  onNextStep: () => void;
  onGotoStep: (step: number) => void;
  //
  onCreateBillingAddress: (address: IAddressItem) => void;
  onCreateShippingAddress: (address: IAddressItem) => void;
  onApplyDiscount: (code: string) => void;
  onApplyShippingCharge: (charge: number) => void;
};
