import { XIcon } from "lucide-react";
import { ReactNode } from "react";
import toast from "react-hot-toast";

export default function SuccessToast({
  content,
  id,
}: {
  content: ReactNode;
  id: string;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-[#D9FFDC] py-2.5 pr-2 pl-4 text-xs text-[#08790F]`}
    >
      {content}
      <div onClick={() => toast.dismiss(id)}>
        <XIcon size={15} color="#545454" />
      </div>
    </div>
  );
}
