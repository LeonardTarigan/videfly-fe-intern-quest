/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

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

export default function useSort() {
  const [, setSearchParams] = useSearchParams();

  const [selectedValue, setSelectedValue] = useState("newest");
  const [selectedLabel, setSelectedLabel] = useState("Terbaru");
  const [isInitial, setIsInitial] = useState(true);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    if (!isInitial) {
      const item = sortingItems.find((item) => item.value === selectedValue);
      if (item) {
        setShowBadge(true);
        setSelectedLabel(item.label);
        setSearchParams((params) => {
          params.set("sort", item.value);
          return params;
        });
      }
    } else {
      setIsInitial(false);
    }
  }, [selectedValue]);

  return {
    sortingItems,
    selectedValue,
    setSelectedValue,
    selectedLabel,
    setSelectedLabel,
    isInitial,
    showBadge,
  };
}
