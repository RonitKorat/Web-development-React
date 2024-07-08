import styles from "./Item.module.css";

const Item = ({ foodItem ,bought}, { handleBuyButton }) => {

  return (
    <li className="list-group-item">
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
