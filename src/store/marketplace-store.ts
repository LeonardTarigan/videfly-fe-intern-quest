import { IMarketplaceStatus } from "@/types/marketplace-types";
import { create } from "zustand";

interface IMarketplaceState {
  marketplace: IMarketplaceStatus;
  connectMarketplace: (key: keyof IMarketplaceStatus) => void;
  disconnectMarketplace: (key: keyof IMarketplaceStatus) => void;
}

export const useMarketplaceStore = create<IMarketplaceState>((set) => ({
  marketplace: {
    blibli: false,
    lazada: false,
    shopee: false,
    tiktokshop: false,
    tokopedia: false,
  },
  connectMarketplace: (key) =>
    set((state) => ({
      marketplace: { ...state.marketplace, [key]: true },
    })),
  disconnectMarketplace: (key) =>
    set((state) => ({
      marketplace: { ...state.marketplace, [key]: false },
    })),
}));
