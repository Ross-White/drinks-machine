import './coins.css';

const Coin = (props) => {
  return (
    <button className="coin" value={props.value} onClick={props.handleMoneyAdded}>
      {props.name}
    </button>
  );
}

export default Coin;