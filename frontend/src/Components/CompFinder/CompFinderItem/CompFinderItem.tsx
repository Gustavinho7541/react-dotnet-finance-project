import React from 'react'
import { Link } from 'react-router';


type Props = {
    ticker: string;
};

const CompFinderItem = ({ ticker }: Props) => {
  return <Link reloadDocument 
    to={`/company/${ticker}/company-profile`}
    type="button"
    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>{ticker}
  </Link>;
}   

export default CompFinderItem;