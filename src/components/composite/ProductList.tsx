import useMarketplaceConnection from "@/hooks/useMarketplaceConnection";
import { Button } from "../ui/Button";

export default function ProductList() {
  const { isAnyMarketplaceConnected } = useMarketplaceConnection();
  if (!isAnyMarketplaceConnected) return null;

  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border px-6 py-[147px]">
      <img src="/catalog-logo.webp" alt="Catalog Logo" className="size-8" />
      <p className="text-center font-semibold sm:w-[70%]">
        Import data produk untuk pembuatan konten praktis
      </p>
      <Button>Impor Data Produk</Button>
    </div>
  );
}
