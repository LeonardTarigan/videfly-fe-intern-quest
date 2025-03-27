import { IMarketplace, MarketplaceName } from "@/types/marketplace-types";
import { create } from "zustand";

interface IMarketplaceState {
  marketplaces: IMarketplace[];
  isAnyMarketplaceConnected: boolean;
  connectMarketplace: (key: MarketplaceName) => void;
  disconnectMarketplace: (key: MarketplaceName) => void;
}

export const useMarketplaceStore = create<IMarketplaceState>((set) => ({
  isAnyMarketplaceConnected: false,
  marketplaces: [
    {
      key: MarketplaceName.Blibli,
      label: "Blibli",
      logo: "/blibli-logo.webp",
      isConnected: false,
    },
    {
      key: MarketplaceName.Lazada,
      label: "Lazada",
      logo: "/lazada-logo.webp",
      isConnected: false,
    },
    {
      key: MarketplaceName.Shopee,
      label: "Shopee",
      logo: "/shopee-logo.webp",
      isConnected: false,
    },
    {
      key: MarketplaceName.TiktokShop,
      label: "TiktokShop",
      logo: "/tiktokshop-logo.webp",
      isConnected: false,
    },
    {
      key: MarketplaceName.Tokopedia,
      label: "Tokopedia",
      logo: "/tokopedia-logo.webp",
      isConnected: false,
    },
  ],
  connectMarketplace: (key) =>
    set((state) => {
      const updatedMarketplaces = state.marketplaces.map((marketplace) =>
        marketplace.key === key
          ? { ...marketplace, isConnected: true }
          : marketplace,
      );

      return {
        marketplaces: updatedMarketplaces,
        isAnyMarketplaceConnected: updatedMarketplaces.some(
          (market) => market.isConnected,
        ),
      };
    }),

  disconnectMarketplace: (key) =>
    set((state) => {
      const updatedMarketplaces = state.marketplaces.map((marketplace) =>
        marketplace.key === key
          ? { ...marketplace, isConnected: false }
          : marketplace,
      );

      return {
        marketplaces: updatedMarketplaces,
        isAnyMarketplaceConnected: updatedMarketplaces.some(
          (market) => market.isConnected,
        ),
      };
    }),
}));
