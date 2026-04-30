
type Props = {
    config: any;
    data: any;
};



const Table = ({config, data}: Props) => {
   const renderedRows = data.map((company: any) => {
    return (
        <tr key={company.cik}>
          {config.map((val: any) =>{
          return <td className="p-3">{val.render(company)}</td>
          } )}
            
        </tr>
    )
   })
   const rendereHeaders = config.map((config: any) => {
    return (
        <th className="p-4 text-left text-xs font-medium text-fray-500 uppercase tacking-wider">
            key={config.label}
        </th>
    )
   })
    return <div className="bg-white shadow rounted=lg p-4 smp-6 xl:p-8">
        <table>
         <thead   className="min-w-full divide-gray 200 m-5">{rendereHeaders}</thead>
        <tbody>{renderedRows}</tbody>
        </table></div>
};

export default Table;