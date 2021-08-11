export interface IMegaMenuColumn {
  title: string;
  titleIcon: string;
  linksList: {
    name: string;
    link: string;
  }[];
  footerLink: {
    name: string;
    link: string;
  };
}
