export interface IExpansionPanel {
  header: {
    tooltipText?: string;
    titleMain: string,
    titleSub?: string,
  };
  content: any;
}
