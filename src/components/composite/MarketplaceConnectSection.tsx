import { IMarketplace, MarketplaceName } from "@/types/marketplace-types";
import { Button } from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function MarketplaceConnectSection({
  marketplaces,
  isDialogOpen,
  setIsDialogOpen,
  handleConnectMarketplace,
  isLoading,
  isAnyMarketplaceConnected,
}: {
  marketplaces: IMarketplace[];
  isAnyMarketplaceConnected: boolean;
  isLoading: { [key: string]: boolean };
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleConnectMarketplace: (key: MarketplaceName) => Promise<void>;
}) {
  if (isAnyMarketplaceConnected) return null;

  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border px-6 py-[147px]">
      <img
        src="/marketplace-logos.webp"
        alt="Marketplace Logos"
        className="w-[80%] sm:w-[55%]"
      />
      <p className="text-center font-semibold sm:w-[70%]">
        Tampilkan katalog produk dari toko onlinemu secara otomatis
      </p>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Tautkan Marketplace</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mt-2 mb-4 text-center text-sm">
              Tautkan Marketplace
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div className="space-y-5">
            {marketplaces.map(({ key, label, logo }) => (
              <div
                key={key}
                className="flex justify-between gap-3 text-sm font-medium"
              >
                <div className="flex items-center gap-4">
                  <img src={logo} alt={label} className="size-9 object-cover" />
                  <p>{label}</p>
                </div>
                <Button
                  onClick={() => handleConnectMarketplace(key)}
                  variant={"outline"}
                  className="text-primary"
                >
                  {isLoading[key] ? <LoadingSpinner /> : <span>Tautkan</span>}
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
