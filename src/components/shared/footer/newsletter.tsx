import { cn } from "@/lib/utils";
import { LuSend } from "react-icons/lu";

const NewsLetter = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h1 className="font-semibold text-lg">Join Our Newsletter</h1>

      <p className="text-base">
        Subscribe to our newsletter to receive updates on new products, offers,
        and more.
      </p>

      <div className="flex items-center gap-3">
        <input
          className="w-full border p-2 rounded bg-white text-black"
          placeholder="Your email address"
        />

        <button className="bg-indigo-900 p-3 rounded">
          <LuSend />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
