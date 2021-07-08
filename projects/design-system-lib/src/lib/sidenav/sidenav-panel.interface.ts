export interface ISidenavPanel {
  header: {
    headerName: string,
    headerIcon: string,
  };
  content: {
    name: string,
    link: string
  }[];
}
