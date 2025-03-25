import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Button } from "../ui/Button";
import { IMarketplace } from "@/types/marketplace-types";

export default function ConnectedMarketplaceImportSection({
  connectedMarketplaces,
}: {
  connectedMarketplaces: IMarketplace[];
}) {
  if (connectedMarketplaces.length === 0) return null;

  return (
    <div className="flex items-center justify-between gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex w-full items-center justify-between gap-2.5 rounded-full border !px-6 py-2 text-xs text-[#545454]">
          <div className="flex items-center gap-2.5">
            <p className="whitespace-nowrap">Toko Terhubung</p>
            <p className="bg-primary flex aspect-square size-[20px] shrink-0 items-center justify-center rounded-full text-white">
              {connectedMarketplaces.length}
            </p>
          </div>
          <ChevronDownIcon size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px]">
          {connectedMarketplaces.map(({ key, label, logo }) => (
            <DropdownMenuItem key={key} className="flex justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <img src={logo} alt={label} className="size-5 object-cover" />
                  <p>{label}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button>Impor Produk</Button>
    </div>
  );
}
