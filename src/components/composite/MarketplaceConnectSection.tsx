import { Button } from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";

const marketplaces = [
  {
    label: "Blibli",
    logo: "/blibli-logo.webp",
  },
  {
    label: "Lazada",
    logo: "/lazada-logo.webp",
  },
  {
    label: "Shopee",
    logo: "/shopee-logo.webp",
  },
  {
    label: "TiktokShop",
    logo: "/tiktokshop-logo.webp",
  },
  {
    label: "Tokopedia",
    logo: "/tokopedia-logo.webp",
  },
];

export default function MarketplaceConnectSection() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border px-6 py-36">
      <img
        src="/marketplace-logos.webp"
        alt="Marketplace Logos"
        className="w-[55%]"
      />
      <p className="w-[70%] text-center font-semibold">
        Tampilkan katalog produk dari toko onlinemu secara otomatis
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Tautkan Marketplace</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mt-2 mb-4 text-sm">
              Tautkan Marketplace
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            {marketplaces.map(({ label, logo }) => (
              <div className="flex justify-between gap-3 text-sm font-medium">
                <div className="flex items-center gap-4">
                  <img src={logo} alt={label} className="size-9 object-cover" />
                  <p>{label}</p>
                </div>
                <Button variant={"outline"} className="text-primary">
                  Tautkan
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
