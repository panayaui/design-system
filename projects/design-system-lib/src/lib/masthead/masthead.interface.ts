export interface IMastheadMenuItem {
  name: string;
  megaMenu?: boolean;
  badge?: string;
  selected?: boolean;
  subMenu?: { name: string }[];
}
