export interface IMarketplaceStatus {
  blibli: boolean;
  lazada: boolean;
  shopee: boolean;
  tiktokshop: boolean;
  tokopedia: boolean;
}

export interface IMarketplace {
  key: keyof IMarketplaceStatus;
  label: string;
  logo: string;
}
