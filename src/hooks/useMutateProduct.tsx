import SuccessToast from "@/components/ui/SuccessToast";
import { useProductStore } from "@/store/product-store";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useMutateProduct() {
  const { removeProduct, editProductName } = useProductStore((state) => state);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");
  const [currentId, setCurrentId] = useState<string>();

  const handleRemoveProduct = (id: string) => {
    removeProduct(id);
    toast((t) => (
      <SuccessToast
        id={t.id}
        content={<p className="whitespace-nowrap">Produk berhasil dihapus</p>}
      />
    ));
  };

  const handleEditProduct = () => {
    if (!currentId) return;

    editProductName(currentId, editInputValue);
    setIsEditDialogOpen(false);
    toast((t) => (
      <SuccessToast
        id={t.id}
        content={
          <p className="whitespace-nowrap">Nama produk berhasil diubah</p>
        }
      />
    ));
  };

  return {
    handleRemoveProduct,
    handleEditProduct,
    editInputValue,
    setEditInputValue,
    isEditDialogOpen,
    setIsEditDialogOpen,
    setCurrentId,
  };
}
