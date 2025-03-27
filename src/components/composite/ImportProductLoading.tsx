import { Button } from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function ImportProductLoading() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border px-6 py-[147px] text-center">
      <p className="font-semibold">
        Kami sedang mengambil data produk dari akun tokomu...
      </p>
      <Button className="w-[180px]">
        <LoadingSpinner className="border-white" />
      </Button>
    </div>
  );
}
