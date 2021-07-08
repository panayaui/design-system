export interface ISidenavInner {
  header: {
    headerName: string,
  };
  content?: {
    name: string,
    selected: boolean
  }[];
}
