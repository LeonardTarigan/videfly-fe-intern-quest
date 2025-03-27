export enum MarketplaceName {
  Blibli = "blibli",
  Lazada = "lazada",
  Shopee = "shopee",
  TiktokShop = "tiktokshop",
  Tokopedia = "tokopedia",
}

export interface IMarketplace {
  key: MarketplaceName;
  label: string;
  logo: string;
  isConnected: boolean;
}

export type TMarketplaceConnectionLoadingState = Record<
  MarketplaceName,
  boolean
>;
