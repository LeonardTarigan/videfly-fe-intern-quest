import SuccessToast from "@/components/ui/SuccessToast";
import { useMarketplaceStore } from "@/store/marketplace-store";
import { IMarketplace, IMarketplaceStatus } from "@/types/marketplace-types";
import { useState } from "react";
import toast from "react-hot-toast";

const marketplaceList: IMarketplace[] = [
  {
    key: "blibli",
    label: "Blibli",
    logo: "/blibli-logo.webp",
  },
  {
    key: "lazada",
    label: "Lazada",
    logo: "/lazada-logo.webp",
  },
  {
    key: "shopee",
    label: "Shopee",
    logo: "/shopee-logo.webp",
  },
  {
    key: "tiktokshop",
    label: "TiktokShop",
    logo: "/tiktokshop-logo.webp",
  },
  {
    key: "tokopedia",
    label: "Tokopedia",
    logo: "/tokopedia-logo.webp",
  },
];

export default function useMarketplaceConnection() {
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { marketplace, connectMarketplace } = useMarketplaceStore(
    (state) => state,
  );

  const isAnyMarketplaceConnected = Object.values(marketplace).some(
    (isConnected) => isConnected,
  );

  const handleConnectMarketplace = async (key: keyof IMarketplaceStatus) => {
    setIsLoading((prev) => ({ ...prev, [key]: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      connectMarketplace(key);

      const marketplaceLabel =
        marketplaceList.find((m) => m.key === key)?.label || key;

      toast((t) => <SuccessToast id={t.id} label={marketplaceLabel} />);
    } catch (error) {
      console.error("Failed to connect to marketplace:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, [key]: false }));
      setIsDialogOpen(false);
    }
  };

  return {
    marketplaceState: marketplace,
    marketplaceList,
    isLoading,
    handleConnectMarketplace,
    isDialogOpen,
    setIsDialogOpen,
    isAnyMarketplaceConnected,
  };
}
