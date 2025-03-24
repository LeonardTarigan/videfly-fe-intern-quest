import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/Select";
import useSort from "@/hooks/useSort";

export default function SortingSelect() {
  const { sortingItems, selectedLabel, selectedValue, setSelectedValue } =
    useSort();

  return (
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
  );
}
