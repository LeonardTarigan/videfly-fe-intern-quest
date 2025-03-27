import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/Dialog";
import { Textarea } from "../ui/Textarea";

export default function EditProductDialog({
  isDialogOpen,
  setIsDialogOpen,
  editInputValue,
  setEditInputValue,
  onEdit,
}: {
  isDialogOpen: boolean;
  editInputValue: string;
  setEditInputValue: Dispatch<React.SetStateAction<string>>;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  onEdit: () => void;
}) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mt-2 text-center text-sm">
            Ubah Nama Produk
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Textarea
              value={editInputValue}
              onChange={(e) => setEditInputValue(e.target.value)}
              className="w-full resize-none text-sm"
              maxLength={150}
              rows={6}
            />
            <p className="text-xs text-[#545454]">
              {editInputValue.length}/150
            </p>
          </div>
          <Button onClick={() => onEdit()} className="w-full">
            Simpan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
