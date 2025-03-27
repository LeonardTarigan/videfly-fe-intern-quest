import ImportProductDialog from "@/components/composite/ImportProductDialog";
import ImportProductLoading from "@/components/composite/ImportProductLoading";
import MarketplaceConnectDropdown from "@/components/composite/MarketplaceConnectDropdown";
import MarketplaceConnectSection from "@/components/composite/MarketplaceConnectSection";
import ProductCard from "@/components/composite/ProductCard";
import SearchBar from "@/components/composite/SearchBar";
import SortingFilter from "@/components/composite/SortingFilter";
import useMarketplaceConnection from "@/hooks/useMarketplaceConnection";
import useProduct from "@/hooks/useProduct";
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
  } = useProduct(connectedMarketplaces);

  const renderMarketplaceConnectSection = !isAnyMarketplaceConnected;
  const renderImportProductLoading =
    isAnyMarketplaceConnected && isImportLoading;
  const renderImportProductSection =
    isAnyMarketplaceConnected && products.length === 0 && !isImportLoading;
  const renderProductListSection =
    isAnyMarketplaceConnected && products.length !== 0 && !isImportLoading;

  return (
    <RootLayout>
      <main>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Produk</h3>
          {isAnyMarketplaceConnected && (
            <div className="flex items-center justify-between gap-2">
              <MarketplaceConnectDropdown
                {...{
                  marketplaces,
                  connectedMarketplaces,
                  connectionLoading,
                  handleConnectMarketplace,
                }}
              />
              <ImportProductDialog
                {...{
                  productCategories,
                  connectedMarketplaces,
                  selectedMarketplace,
                  isDialogOpen: isImportDialogOpen,
                  setIsDialogOpen: setIsImportDialogOpen,
                  onMarketplaceSelectChange: handleMarketplaceSelectChange,
                  onImportProduct: handleImportProduct,
                }}
              />
            </div>
          )}

          <SearchBar />
          <SortingFilter />
        </section>
        <section className="mt-6">
          <p className="mb-2 text-[#545454]">{products.length} produk</p>

          {renderMarketplaceConnectSection && (
            <MarketplaceConnectSection
              {...{
                marketplaces,
                connectionLoading,
                handleConnectMarketplace,
                isDialogOpen: isConnectDialogOpen,
                setIsDialogOpen: setIsConnectDialogOpen,
              }}
            />
          )}
          {renderImportProductLoading && <ImportProductLoading />}
          {renderImportProductSection && (
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
                {...{
                  productCategories,
                  connectedMarketplaces,
                  selectedMarketplace,
                  buttonText: "Impor Data Produk",
                  isDialogOpen: isImportDialogOpen,
                  setIsDialogOpen: setIsImportDialogOpen,
                  onMarketplaceSelectChange: handleMarketplaceSelectChange,
                  onImportProduct: handleImportProduct,
                }}
              />
            </div>
          )}
          {renderProductListSection && (
            <div className="space-y-2">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </RootLayout>
  );
}
