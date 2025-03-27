import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/Select";
import useSort from "@/hooks/useSort";
import { Button } from "../ui/Button";
import FilterIcon from "../icons/FilterIcon";

export default function SortingFilter() {
  const {
    sortingItems,
    selectedLabel,
    selectedValue,
    setSelectedValue,
    showBadge,
  } = useSort();

  return (
    <div className="flex items-center gap-4">
      <Button variant={"outline"} size={"lg"} className="gap-2.5 rounded-full">
        <FilterIcon />
        <span>Filter</span>
        {showBadge && (
          <p className="bg-primary flex aspect-square size-[20px] shrink-0 items-center justify-center rounded-full text-xs text-white">
            1
          </p>
        )}
      </Button>
      <Select
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      >
        <SelectTrigger className="w-full">
          <p>
            Urutkan: <span className="font-semibold">{selectedLabel}</span>
          </p>
        </SelectTrigger>
        <SelectContent>
          {sortingItems.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
