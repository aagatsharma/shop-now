const AvatarSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-full bg-gray-300 animate-pulse size-30" />
      <div>
        <div className="text-lg bg-gray-300 animate-pulse p-2 w-40 font-semibold" />
      </div>
    </div>
  );
};

export default AvatarSkeleton;
