type Props = {
  title: string;
  subTitle: string | number;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <p className="text-xs uppercase text-gray-500 font-semibold">
        {title}
      </p>
      <p className="text-lg font-bold text-gray-800">
        {subTitle || "-"}
      </p>
    </div>
  );
};

export default Tile;