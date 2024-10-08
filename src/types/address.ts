export type IAddressItem = {
  id?: string;
  name: string;
  email: string;
  company?: string;
  primary?: boolean;
  address: string;
  city: string;
  state?: string;
  zipCode: string;
  country: string;
  phone?: string;
  addressType?: string;
};