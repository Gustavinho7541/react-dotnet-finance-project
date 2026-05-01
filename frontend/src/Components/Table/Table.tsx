type Props = {
  config: {
    label: string;
    render: (data: any) => any;
  }[];
  data: any[];
};

const Table = ({ config, data }: Props) => {

  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
      
      <table className="min-w-full divide-y divide-gray-200">

        {/* HEADER */}
        <thead className="bg-gray-50">
          <tr>
            {config.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {config.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default Table;