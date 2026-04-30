import React from "react";
import Table from "../../Table/Table";
import RatioList from "../../RadioList/RadioList";

interface Props {}

const DesignPage = (props: Props) => {
    return (
        <>
         <h1>FinShark Design Page</h1>
         <h2>This is FinShark's design page. This is where we well house various design aspects of the app</h2>
        
        <RatioList />
        <Table />
        
        </>
    )
};

export default DesignPage;