import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { SearchIcon, XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface ISearchBar {
  defaultValue?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetSearch: () => void;
}

export default function SearchBar({
  defaultValue,
  onChange,
  onResetSearch,
  placeholder = "Cari Data",
}: ISearchBar) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const handleReset = () => {
    setInputValue("");
    onResetSearch();
  };

  return (
    <div
      className={cn(
        "ring-primary mx-0.5 flex items-center overflow-hidden rounded-xl bg-[#F6F6F6] px-2 focus-within:bg-white focus-within:ring-2",
      )}
    >
      <SearchIcon size={16} className="shrink-0 text-[#8A8A8A]" />
      <Input
        className="w-full rounded-none border-none shadow-none focus-visible:ring-0"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <Button
          onClick={handleReset}
          size={"icon"}
          variant={"ghost"}
          className="h-full w-fit rounded-none bg-transparent p-0 text-[#8A8A8A] hover:bg-transparent"
        >
          <XCircleIcon size={32} />
        </Button>
      )}
    </div>
  );
}
