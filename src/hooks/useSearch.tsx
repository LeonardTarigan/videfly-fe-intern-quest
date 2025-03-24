/* eslint-disable react-hooks/exhaustive-deps */

import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = searchParams.get("search") ?? "";

  const [inputValue, setInputValue] = useState(defaultValue);
  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    setSearchParams((params) => {
      params.delete("search");
      return params;
    });
  };

  useEffect(() => {
    setSearchParams((params) => {
      if (inputValue === "") {
        params.delete("search");
        return params;
      }

      params.set("search", inputValue);
      return params;
    });
  }, [debouncedInputValue]);

  return {
    handleChange,
    handleReset,
    inputValue,
  };
}
