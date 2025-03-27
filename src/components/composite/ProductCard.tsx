import { IProduct } from "@/types/product-types";
import { Button } from "../ui/Button";
import SparkleIcon from "../icons/SparkleIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

interface IProductCard extends IProduct {
  onEdit: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  brand,
  img,
  url,
  marketplace,
  onDelete,
}: IProductCard) {
  return (
    <div className="space-y-4 py-4">
      <div className="flex gap-4">
        <img src={img} alt={name} className="size-20 rounded-sm" />
        <a href={url} target="_blank" className="space-y-2 text-xs">
          <p className="font-medium underline">{name}</p>
          <p className="text-[#545454]">{brand}</p>
          <div className="flex items-center gap-2">
            <img
              src={`/${marketplace.toLowerCase()}-logo.webp`}
              className="size-6"
            />
            <p className="font-medium">{marketplace}</p>
          </div>
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant={"outline"}
          className="text-primary border-primary grow"
        >
          <SparkleIcon />
          <span className="font-medium">Buat Video</span>
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <EditIcon />
        </Button>
        <Button onClick={() => onDelete(id)} variant={"ghost"} size={"icon"}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
