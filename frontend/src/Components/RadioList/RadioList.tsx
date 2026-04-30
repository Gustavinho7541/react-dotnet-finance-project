type Props = {
  config: {
    label: string;
    render: (data: any) => any;
    subTitle?: string;
  }[];
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedRows = config.map((row, index) => {
    return (
      <li key={index} className="py-3 sm:py-4">
        <div className="flex items-center justify-between space-x-4">

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {row.subTitle}
            </p>
          </div>

          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>

        </div>
      </li>
    );
  });

  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
      <ul className="divide-y divide-gray-200">
        {renderedRows}
      </ul>
    </div>
  );
};

export default RatioList;