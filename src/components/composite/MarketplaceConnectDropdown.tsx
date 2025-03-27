import {
  IMarketplace,
  MarketplaceName,
  TMarketplaceConnectionLoadingState,
} from "@/types/marketplace-types";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function MarketplaceConnectDropdown({
  marketplaces,
  connectedMarketplaces,
  connectionLoading,

  handleConnectMarketplace,
}: {
  marketplaces: IMarketplace[];
  connectedMarketplaces: IMarketplace[];
  connectionLoading: TMarketplaceConnectionLoadingState;
  handleConnectMarketplace: (key: MarketplaceName) => Promise<void>;
}) {
  return (
    <DropdownMenu modal={false}>
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
        {marketplaces.map(({ key, label, logo, isConnected }) => (
          <DropdownMenuItem
            key={key}
            className="flex justify-between hover:!bg-transparent"
            onSelect={(e) => e.preventDefault()}
          >
            <div className="flex w-full justify-between gap-5">
              <div className="flex items-center gap-4">
                <img src={logo} alt={label} className="size-5 object-cover" />
                <p>{label}</p>
              </div>

              <Button
                disabled={isConnected}
                onClick={() => handleConnectMarketplace(key)}
                variant={"outline"}
                className="text-primary text-xs"
              >
                {connectionLoading[key] ? (
                  <LoadingSpinner />
                ) : (
                  <span>Tautkan</span>
                )}
              </Button>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
