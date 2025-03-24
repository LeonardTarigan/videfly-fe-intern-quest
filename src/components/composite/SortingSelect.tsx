"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/Select";

const sortingItems = [
  {
    label: "Terbaru",
    value: "newest",
  },
  {
    label: "Terlama",
    value: "oldest",
  },
  {
    label: "Nama: A-Z",
    value: "name-asc",
  },
  {
    label: "Nama: Z-A",
    value: "name-desc",
  },
];

export default function SortingSelect() {
  const [selectedValue, setSelectedValue] = useState("newest");
  const [selectedLabel, setSelectedLabel] = useState("Terbaru");

  useEffect(() => {
    const item = sortingItems.find((item) => item.value === selectedValue);
    if (item) {
      setSelectedLabel(item.label);
    }
  }, [selectedValue]);

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
