import SuccessToast from "@/components/ui/SuccessToast";
import { useMarketplaceStore } from "@/store/marketplace-store";
import {
  MarketplaceName,
  TMarketplaceConnectionLoadingState,
} from "@/types/marketplace-types";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useMarketplaceConnection() {
  const [connectionLoading, setConnectionLoading] =
    useState<TMarketplaceConnectionLoadingState>({
      blibli: false,
      lazada: false,
      shopee: false,
      tiktokshop: false,
      tokopedia: false,
    });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { marketplaces, isAnyMarketplaceConnected, connectMarketplace } =
    useMarketplaceStore((state) => state);

  const handleConnectMarketplace = async (key: MarketplaceName) => {
    setConnectionLoading((prev) => ({ ...prev, [key]: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      connectMarketplace(key);

      const marketplaceLabel =
        marketplaces.find((m) => m.key === key)?.label || key;

      toast((t) => <SuccessToast id={t.id} label={marketplaceLabel} />);
    } catch (error) {
      console.error("Failed to connect to marketplace:", error);
    } finally {
      setConnectionLoading((prev) => ({ ...prev, [key]: false }));
      setIsDialogOpen(false);
    }
  };

  const connectedMarketplaces = marketplaces.filter(
    ({ isConnected }) => isConnected,
  );

  return {
    marketplaces,
    connectedMarketplaces,
    connectionLoading,
    handleConnectMarketplace,
    isDialogOpen,
    setIsDialogOpen,
    isAnyMarketplaceConnected,
  };
}
