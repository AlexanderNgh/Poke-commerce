function CartItem(props){
    return(
        <div className="CartItem">
            <div>{props.item}</div>
            <div>{props.qty}</div>
            <div>{props.qty * props.cost}</div>
            <button onClick={props.deleteItem}>
                Delete
            </button>
        </div>


    );

}
CartItem.defaultProps = {
    item: "loading item",
    qty: "loading amount",
    cost: "calculating cost"
    
}
export default CartItem