export interface ISidenavMain {
  header: {
    headerName: string,
    headerIcon?: string,
  };
  content: {
    name: string,
    link: string,
    selected: boolean
  }[];
}
