/* eslint-disable react-hooks/exhaustive-deps */
import {
  IMarketplace,
  ISelectedMarketplace,
  MarketplaceName,
} from "@/types/marketplace-types";
import { useEffect, useState } from "react";
import productCategoriesDummy from "@/lib/static/product-categories-dummy.json";
import { useProductStore } from "@/store/product-store";
import productListDummy from "@/lib/static/product-list-dummy.json";
import { IProduct } from "@/types/product-types";
import toast from "react-hot-toast";
import SuccessToast from "@/components/ui/SuccessToast";

export default function useImportProduct(
  connectedMarketplaces: IMarketplace[],
) {
  const { products, addProductList } = useProductStore((state) => state);

  const [productCategories] = useState(productCategoriesDummy.data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMarketplace, setSelectedMarketplace] =
    useState<ISelectedMarketplace | null>(() => {
      if (connectedMarketplaces.length > 0) {
        const firstMarketplace = connectedMarketplaces[0];
        return {
          label: firstMarketplace.label,
          value: firstMarketplace.key,
        };
      }
      return null;
    });

  useEffect(() => {
    if (!selectedMarketplace && connectedMarketplaces.length > 0) {
      const firstMarketplace = connectedMarketplaces[0];
      setSelectedMarketplace({
        label: firstMarketplace.label,
        value: firstMarketplace.key,
      });
    } else if (
      selectedMarketplace &&
      !connectedMarketplaces.some((mp) => mp.key === selectedMarketplace.value)
    ) {
      if (connectedMarketplaces.length > 0) {
        const firstMarketplace = connectedMarketplaces[0];
        setSelectedMarketplace({
          label: firstMarketplace.label,
          value: firstMarketplace.key,
        });
      } else {
        setSelectedMarketplace(null);
      }
    }
  }, [connectedMarketplaces]);

  const handleMarketplaceSelectChange = (value: MarketplaceName) => {
    const foundMarketplace = connectedMarketplaces.find(
      ({ key }) => key === value,
    );
    if (foundMarketplace) {
      setSelectedMarketplace({
        value,
        label: foundMarketplace.label,
      });
    }
  };

  const handleImportProduct = async () => {
    setIsLoading(true);

    try {
      setIsDialogOpen(false);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      addProductList(productListDummy.data as IProduct[]);

      toast((t) => (
        <SuccessToast
          id={t.id}
          content={
            <p className="whitespace-nowrap">
              Berhasil mengambil{" "}
              <span className="font-semibold">
                {productListDummy.data.length} produk aktif
              </span>
              !
            </p>
          }
        />
      ));
    } catch (error) {
      console.error("Failed to connect to marketplace:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    productCategories,
    selectedMarketplace,
    handleMarketplaceSelectChange,
    isDialogOpen,
    setIsDialogOpen,
    isLoading,
    setIsLoading,
    handleImportProduct,
  };
}
