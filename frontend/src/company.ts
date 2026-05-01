import { ReactNode } from "react";

export interface CompanySearch {
    symbol: string;
    name: string;
    currency: string;
    stockExchange: string;
    exchangeShortName: string;
}

export interface CompanyProfile {
    name: ReactNode;
    symbol: string;
    price: number;
    beta: number;
    volAvg: number;
    mktCap: number;
    lastDiv: number;
    range: string;
    changes: number;
    companyName: string;
    currency: string;
    cik: string;
    isin: string;
    cusip: string;
    exchange: string;
    exchangeShortName: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: number;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    dcfDiff: number;
    dcf: number;
    image: string;
    ipoDate: string;
    defaultImage: boolean;
    isEtf: boolean;
    isActivelyTrading: boolean;
    isAdr: boolean;
    isFund: boolean;
}

export interface CompanyQuote {
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    exchange: string;
    open: number;
    previousClose: number;
    eps: number;
    pe: number;
    earningsAnnouncement: string;
    sharesOutstanding: number;
    timestamp: number;
}

export interface CompanyIncomeStatement {
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
    period: string;
    revenue: number;
    costOfRevenue: number;
    grossProfit: number;
    grossProfitRatio: number;
    researchAndDevelopmentExpenses: number;
    generalAndAdministrativeExpenses: number;
    sellingAndMarketingExpenses: number;
    operatingExpenses: number;
    costAndExpenses: number;
    interestIncome: number;
    interestExpense: number;
    depreciationAndAmortization: number;
    ebitda: number;
    ebitdaratio: number;
    operatingIncome: number;
    operatingIncomeRatio: number;
    totalOtherIncomeExpensesNet: number;
    incomeBeforeTax: number;
    incomeBeforeTaxRatio: number;
    incomeTaxExpense: number;
    netIncome: number;
    netIncomeRatio: number;
    eps: number;
    epsdiluted: number;
    weightedAverageShsOut: number;
    weightedAverageShsOutDil: number;
}

export interface CompanyBalanceSheet {
    otherCurrentLiabilities(otherCurrentLiabilities: any): unknown;
    otherLiabilities(otherLiabilities: any): unknown;
    totalStockholdersEquity(totalStockholdersEquity: any): unknown;
    retainedEarnings(retainedEarnings: any): unknown;
    date: string;
    symbol: string;
    reportedCurrency: string;
    totalAssets: number;
    totalCurrentAssets: number;
    cashAndCashEquivalents: number;
    shortTermInvestments: number;
    netReceivables: number;
    inventory: number;
    totalNonCurrentAssets: number;
    propertyPlantEquipmentNet: number;
    goodwill: number;
    intangibleAssets: number;
    totalLiabilities: number;
    totalCurrentLiabilities: number;
    accountPayables: number;
    shortTermDebt: number;
    totalNonCurrentLiabilities: number;
    longTermDebt: number;
    totalEquity: number;
    totalLiabilitiesAndEquity: number;
}

export interface CompanyCashFlow {
    date: string;
    symbol: string;
    netIncome: number;
    depreciationAndAmortization: number;
    deferredIncomeTax: number;
    stockBasedCompensation: number;
    changeInWorkingCapital: number;
    accountsReceivables: number;
    inventory: number;
    accountsPayables: number;
    netCashProvidedByOperatingActivities: number;
    investmentsInPropertyPlantAndEquipment: number;
    acquisitionsNet: number;
    purchasesOfInvestments: number;
    salesMaturitiesOfInvestments: number;
    netCashUsedForInvestingActivities: number;
    debtRepayment: number;
    commonStockIssued: number;
    dividendsPaid: number;
    netCashUsedProvidedByFinancingActivities: number;
    netChangeInCash: number;
    cashAtEndOfPeriod: number;
    cashAtBeginningOfPeriod: number;
}

export interface CompanyKeyMetrics {
    marketCapTTM(marketCapTTM: any): unknown;
    currentRatioTTM(currentRatioTTM: any): unknown;
    returnOnTangibleAssetsTTM(returnOnTangibleAssetsTTM: any): unknown;
    freeCashFlowPerShareTTM(freeCashFlowPerShareTTM: any): unknown;
    bookValuePerShareTTM(bookValuePerShareTTM: any): unknown;
    dividendYieldTTM(dividendYieldTTM: any): unknown;
    capexPerShareTTM(capexPerShareTTM: any): unknown;
    grahamNumberTTM(grahamNumberTTM: any): unknown;
    symbol: string;
    date: string;
    revenuePerShare: number;
    netIncomePerShare: number;
    operatingCashFlowPerShare: number;
    freeCashFlowPerShare: number;
    cashPerShare: number;
    bookValuePerShare: number;
    tangibleBookValuePerShare: number;
    shareholdersEquityPerShare: number;
    interestDebtPerShare: number;
    marketCap: number;
    enterpriseValue: number;
    peRatio: number;
    priceToSalesRatio: number;
    pocfratio: number;
    pfcfRatio: number;
    pbRatio: number;
    ptbRatio: number;
    evToSales: number;
    enterpriseValueOverEBITDA: number;
    evToOperatingCashFlow: number;
    earningsYield: number;
    freeCashFlowYield: number;
    debtToEquity: number;
    debtToAssets: number;
    netDebtToEBITDA: number;
    currentRatio: number;
    interestCoverage: number;
    incomeQuality: number;
    dividendYield: number;
    payoutRatio: number;
    salesGeneralAndAdministrativeToRevenue: number;
    researchAndDdevelopementToRevenue: number;
    intangiblesToTotalAssets: number;
    capexToOperatingCashFlow: number;
    capexToRevenue: number;
    capexToDepreciation: number;
    stockBasedCompensationToRevenue: number;
    grahamNumber: number;
    roic: number;
    returnOnTangibleAssets: number;
    grahamNetNet: number;
    workingCapital: number;
    tangibleAssetValue: number;
    netCurrentAssetValue: number;
    investedCapital: number;
    averageReceivables: number;
    averagePayables: number;
    averageInventory: number;
    daysSalesOutstanding: number;
    daysPayablesOutstanding: number;
    daysOfInventoryOnHand: number;
    receivablesTurnover: number;
    payablesTurnover: number;
    inventoryTurnover: number;
    roe: number;
    capexPerShare: number;
}

export interface ApiResponse<T> {
    data: T;
    isLoading: boolean;
    error: string | null;
}

export interface CompanyKey {
  [x: string]: string;
  symbol: string;
  instrument_name: string;
  exchange: string;
}