import ImportProductDialog from "@/components/composite/ImportProductDialog";
import ImportProductLoading from "@/components/composite/ImportProductLoading";
import MarketplaceConnectDropdown from "@/components/composite/MarketplaceConnectDropdown";
import MarketplaceConnectSection from "@/components/composite/MarketplaceConnectSection";
import SearchBar from "@/components/composite/SearchBar";
import SortingSelect from "@/components/composite/SortingSelect";
import FilterIcon from "@/components/icons/FilterIcon";
import { Button } from "@/components/ui/Button";
import useImportProduct from "@/hooks/useImportProduct";
import useMarketplaceConnection from "@/hooks/useMarketplaceConnection";
import RootLayout from "@/layouts/RootLayout";

export default function HomePage() {
  const {
    marketplaces,
    connectedMarketplaces,
    handleConnectMarketplace,
    connectionLoading,
    isAnyMarketplaceConnected,
    isDialogOpen: isConnectDialogOpen,
    setIsDialogOpen: setIsConnectDialogOpen,
  } = useMarketplaceConnection();

  const {
    products,
    productCategories,
    selectedMarketplace,
    handleMarketplaceSelectChange,
    handleImportProduct,
    isDialogOpen: isImportDialogOpen,
    setIsDialogOpen: setIsImportDialogOpen,
    isLoading: isImportLoading,
  } = useImportProduct(connectedMarketplaces);

  return (
    <RootLayout>
      <main>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Produk</h3>
          {isAnyMarketplaceConnected && (
            <div className="flex items-center justify-between gap-2">
              <MarketplaceConnectDropdown
                marketplaces={marketplaces}
                connectedMarketplaces={connectedMarketplaces}
                connectionLoading={connectionLoading}
                handleConnectMarketplace={handleConnectMarketplace}
              />
              <ImportProductDialog
                productCategories={productCategories}
                isDialogOpen={isImportDialogOpen}
                setIsDialogOpen={setIsImportDialogOpen}
                connectedMarketplaces={connectedMarketplaces}
                selectedMarketplace={selectedMarketplace}
                onMarketplaceSelectChange={handleMarketplaceSelectChange}
                onImportProduct={handleImportProduct}
              />
            </div>
          )}

          <SearchBar />
          <div className="flex items-center gap-4">
            <Button
              variant={"outline"}
              size={"lg"}
              className="gap-2.5 rounded-full"
            >
              <FilterIcon />
              <span>Filter</span>
            </Button>
            <SortingSelect />
          </div>
        </section>
        <section className="mt-6">
          <p className="mb-2 text-[#545454]">{products.length} produk</p>
          <MarketplaceConnectSection
            marketplaces={marketplaces}
            isDialogOpen={isConnectDialogOpen}
            isAnyMarketplaceConnected={isAnyMarketplaceConnected}
            connectionLoading={connectionLoading}
            setIsDialogOpen={setIsConnectDialogOpen}
            handleConnectMarketplace={handleConnectMarketplace}
          />
          {isAnyMarketplaceConnected && isImportLoading && (
            <ImportProductLoading />
          )}
          {isAnyMarketplaceConnected &&
            products.length === 0 &&
            !isImportLoading && (
              <div className="flex flex-col items-center gap-6 rounded-lg border px-6 py-[147px]">
                <img
                  src="/catalog-logo.webp"
                  alt="Catalog Logo"
                  className="size-8"
                />
                <p className="text-center font-semibold sm:w-[70%]">
                  Import data produk untuk pembuatan konten praktis
                </p>
                <ImportProductDialog
                  buttonText="Impor Data Produk"
                  productCategories={productCategories}
                  isDialogOpen={isImportDialogOpen}
                  setIsDialogOpen={setIsImportDialogOpen}
                  connectedMarketplaces={connectedMarketplaces}
                  selectedMarketplace={selectedMarketplace}
                  onMarketplaceSelectChange={handleMarketplaceSelectChange}
                  onImportProduct={handleImportProduct}
                />
              </div>
            )}
        </section>
      </main>
    </RootLayout>
  );
}
