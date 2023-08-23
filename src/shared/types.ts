export enum Pages {
  Home = 'Home',
  Benefits  = 'Benefits',
  ContactUs = 'Contact-Us',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}