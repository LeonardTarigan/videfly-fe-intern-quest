import { MarketplaceName } from "./marketplace-types";

export interface IProductCategory {
  name: string;
  count: number;
  subgroups?: IProductCategory[];
}

export interface IProduct {
  id: string;
  name: string;
  brand: string;
  marketplace: MarketplaceName;
  img: string;
}
