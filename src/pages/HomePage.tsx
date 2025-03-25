import ConnectedMarketplaceImportSection from "@/components/composite/ConnectedMarketplaceImportSection";
import MarketplaceConnectSection from "@/components/composite/MarketplaceConnectSection";
import ProductList from "@/components/composite/ProductList";
import SearchBar from "@/components/composite/SearchBar";
import SortingSelect from "@/components/composite/SortingSelect";
import FilterIcon from "@/components/icons/FilterIcon";
import { Button } from "@/components/ui/Button";
import useMarketplaceConnection from "@/hooks/useMarketplaceConnection";
import RootLayout from "@/layouts/RootLayout";

export default function HomePage() {
  const {
    marketplaceList,
    marketplaceState,
    isDialogOpen,
    setIsDialogOpen,
    handleConnectMarketplace,
    isLoading,
    isAnyMarketplaceConnected,
  } = useMarketplaceConnection();

  const connectedMarketplaces = marketplaceList.filter(
    ({ key }) => marketplaceState[key],
  );

  return (
    <RootLayout>
      <main>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Produk</h3>
          <ConnectedMarketplaceImportSection
            connectedMarketplaces={connectedMarketplaces}
          />
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
          <p className="mb-2 text-[#545454]">0 produk</p>
          <MarketplaceConnectSection
            marketplaceList={marketplaceList}
            marketplaceState={marketplaceState}
            isDialogOpen={isDialogOpen}
            isLoading={isLoading}
            isAnyMarketplaceConnected={isAnyMarketplaceConnected}
            setIsDialogOpen={setIsDialogOpen}
            handleConnectMarketplace={handleConnectMarketplace}
          />
          <ProductList />
        </section>
      </main>
    </RootLayout>
  );
}
