/* eslint-disable react-hooks/exhaustive-deps */
import {
  IMarketplace,
  ISelectedMarketplace,
  MarketplaceName,
} from "@/types/marketplace-types";
import { useEffect, useMemo, useState } from "react";
import productCategoriesDummy from "@/lib/static/product-categories-dummy.json";
import { useProductStore } from "@/store/product-store";
import productListDummy from "@/lib/static/product-list-dummy.json";
import { IProduct } from "@/types/product-types";
import toast from "react-hot-toast";
import SuccessToast from "@/components/ui/SuccessToast";
import { useSearchParams } from "react-router";

export default function useProduct(connectedMarketplaces: IMarketplace[]) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const sortQuery = searchParams.get("sort") || "newest";

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

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery),
    );
  }, [products, searchQuery]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortQuery === "newest")
        return (
          new Date(a.time_added).getTime() - new Date(b.time_added).getTime()
        );
      if (sortQuery === "oldest")
        return (
          new Date(b.time_added).getTime() - new Date(a.time_added).getTime()
        );
      if (sortQuery === "name-asc") return a.name.localeCompare(b.name);
      if (sortQuery === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
  }, [filteredProducts, sortQuery]);

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
    products: sortedProducts,
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
