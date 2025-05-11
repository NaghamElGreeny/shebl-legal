type Banner = {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
};

type ServiceItem = {
  id: number;
  icon: string;
  background: string;
  title: string;
  description: string;
};
export type ServicesResponse = {
  banner: Banner;
  our_services: ServiceItem[];
};

type FaqItem = {
  id: number;
  is_active: boolean;
  question: string;
  answer: string;
};
export type FaqResponse = {
  banner: Banner;
  faq: FaqItem[];
};
