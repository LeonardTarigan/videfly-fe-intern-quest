import {
  IMarketplace,
  ISelectedMarketplace,
  MarketplaceName,
} from "@/types/marketplace-types";
import { IProductCategory } from "@/types/product-types";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/Select";

export default function ImportProductDialog({
  productCategories,
  connectedMarketplaces,
  isDialogOpen,
  selectedMarketplace,
  setIsDialogOpen,
  onMarketplaceSelectChange,
  onImportProduct,
  buttonText = "Impor Produk",
}: {
  productCategories: IProductCategory[];
  connectedMarketplaces: IMarketplace[];
  selectedMarketplace: ISelectedMarketplace | null;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onMarketplaceSelectChange: (value: MarketplaceName) => void;
  onImportProduct: () => Promise<void>;
  buttonText?: string;
}) {
  if (!selectedMarketplace) return null;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mt-2 text-center text-sm">
            Pilih Data Produk
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Select
            value={selectedMarketplace.value}
            onValueChange={onMarketplaceSelectChange}
          >
            <SelectTrigger className="w-full">
              <p>
                Dari{" "}
                <span className="font-semibold">
                  {selectedMarketplace.label}
                </span>
              </p>
            </SelectTrigger>
            <SelectContent>
              {connectedMarketplaces.map(({ key, label }) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="space-y-3 text-sm">
            <h4 className="text-[#545454]">Pilih produk</h4>
            <div>
              {productCategories.map(({ name, count, subgroups }) => (
                <div key={name} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id={name} />
                    <label
                      htmlFor={name}
                      className="select-none peer-disabled:cursor-not-allowed"
                    >
                      {name} ({count})
                    </label>
                  </div>
                  {subgroups &&
                    subgroups.map(({ name, count }) => (
                      <div key={name} className="flex items-center gap-2 pl-6">
                        <Checkbox id={name} />
                        <label
                          htmlFor={name}
                          className="select-none peer-disabled:cursor-not-allowed"
                        >
                          {name} ({count})
                        </label>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button onClick={() => onImportProduct()} className="mt-6">
          Impor
        </Button>
      </DialogContent>
    </Dialog>
  );
}
