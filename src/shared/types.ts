export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Projects = "projects",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProjectType {
  icon: JSX.Element;
  title: string;
  description: string;
  linkp:string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
