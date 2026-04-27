

import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img
        src="https://akeloo.com.br/wp-content/uploads/2022/03/B3.png"
        alt="empresa"
      />

      <h2>{companyName}</h2>
      <p>{ticker}</p>
      <p>${price}</p>
    </div>
  );
};

export default Card;