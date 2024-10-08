// ----------------------------------------------------------------------

export type IPricingHome = {
  license: string;
  price: string;
  commons: string[];
  options: {
    title: string;
    disabled: boolean;
  }[];
};

export type IPricingMarketing = {
  license: string;
  price: string;
  caption: string;
  options: string[];
};

export type PricingCardProps = {
  license: string;
  price: string;
  caption?: string;
  options: {
    title: string;
    tootip?: string;
    disabled: boolean;
  }[];
};
