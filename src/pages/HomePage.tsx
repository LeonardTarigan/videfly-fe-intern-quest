import SearchBar from "@/components/composite/SearchBar";
import SortingSelect from "@/components/composite/SortingSelect";
import FilterIcon from "@/components/icons/FilterIcon";
import { Button } from "@/components/ui/Button";
import RootLayout from "@/layouts/RootLayout";

export default function HomePage() {
  return (
    <RootLayout>
      <main>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Produk</h3>
          <SearchBar
            onChange={() => {}}
            onResetSearch={() => {}}
            placeholder="Cari produk..."
          />
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
      </main>
    </RootLayout>
  );
}
