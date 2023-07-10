import "./CardItem.css";
const CardItem = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CardItem;
