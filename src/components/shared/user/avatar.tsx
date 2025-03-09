const Avatar = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={image}
        alt={name}
        className="rounded-full size-30 object-cover border"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default Avatar;
