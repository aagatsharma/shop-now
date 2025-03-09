import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  className,
  hideBorder = false,
}: {
  title: string;
  className?: string;
  hideBorder?: boolean;
}) => {
  return (
    <h1
      className={cn(
        "text-xl  font-bold",
        !hideBorder && "border-green-600 w-fit border-b-4",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
