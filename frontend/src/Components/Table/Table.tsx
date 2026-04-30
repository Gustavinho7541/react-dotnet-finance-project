import React from "react";
import { testIncomeStatementData } from "./testData";
const data = testIncomeStatementData;

type Props = {};

type Company = (typeof data)[0];

const configs = [
    {
        label: "Year",
        render: (company: Company) => company.acceptedDate
    },
    {
        label: "Cost os Revenue",
        render: (company: Company) => company.costOfRevenue
    }
]

const Table = (props: Props) => {
   const renderedRows = data.map((company) => {
    return (
        <tr key={company.cik}>
            {configs.map((val:any) => {
                return (
                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{val.render(company)}</td>
                );
            })}
            
        </tr>
    )
   })
   const rendereHeaders = configs.map((config: any) => {
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