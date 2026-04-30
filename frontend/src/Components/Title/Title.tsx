import React from "react";
import { Link, Outlet } from "react-router";

interface Props {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
    ticker?: any;
}

const Title = ({title, subtitle, children, ticker}: Props) => {
    return (
        <div className="relative md:ml-64 bg-blueGray-100 w-full">
            <div className="relative pt-20 pb-32 bg-lightBlue-500">
                <div className="px-4 md:px-6 mx-auto w-full">
                    <div>
                        <div className="flex flex-wrap">{children}</div>
                        <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
                        <Link to="company-profile" className="flex md:min-w-full text-blueGray-500 text-medium uppercase font-bold block pt--1 pb-4 no-underline" />
                        <span className="font-bold text-xl">{subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title;