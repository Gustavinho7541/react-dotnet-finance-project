import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../Pages/HomePage/HomePage";
import CompanyPage from "../../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import IncomeStatement from "../IncomeStatement/IncomeStatement";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import DesignPage from "../../Pages/DesignGuide/DesignPage";
import BalanceSheet from "../BalanceSheet/BalanceSheet";
import CashFlowStatement from "../CashflowStatement/CashFlowStatement";
import LoginPage from "../../Pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "search", element: <SearchPage /> },
            { path: "design-guide", element: <DesignPage /> },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
                children: [
                    { index: true, element: <div>Selecione uma opção no menu</div> }, // 👈 AQUI

                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                    { path: "cashflow-statement", element: <CashFlowStatement /> },
                ],
            },
        ],
    },
]);