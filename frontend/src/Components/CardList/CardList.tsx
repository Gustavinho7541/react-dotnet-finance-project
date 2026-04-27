import { CompanySearch } from "../../company";
import Card from "../Card/Card";

interface Props {
  companies: CompanySearch[];
}

const CardList = ({ companies }: Props) => {
  return (
    <div>
      {companies.map((c, i) => (
        <Card
          key={i}
          companyName={c.instrument_name}
          ticker={c.symbol}
          price={0}
        />
      ))}
    </div>
  );
};

export default CardList;