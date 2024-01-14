
function CartItem(props){
    return(
        <div className="CartItem">
            <div className="CartName">{props.item}</div>
            <div className="CartQty">{props.qty}</div>
            <div className="CartCost">{props.qty * props.cost}</div>
            <button 
            onClick={() => props.deleteItem(props.index)}
            className="CartBtn">
                Delete
            </button>
        </div>


    );
}

function CartContainer(props){

    let cartLength = props.items.length
    console.log(props.items.length)

    props.items.map((data, index) => (
        console.log(index)
    ))

    return(
        <div>
        {cartLength === 0 ? (
                <div className="CartContainer">
                    <CartItem
                        item = "CART IS EMPTY"
                        qty = {0}
                        cost = {0}
                    ></CartItem>
                </div>
            )
            :
            (
                <div className="CartContainer">
                    {props.items.map((data, index) => (
                        
                        <CartItem
                        index = {index}
                        item = {data}
                        cost = {props.cost[index]}
                        qty = {props.qty[index]}
                        deleteItem = {props.deleteItem}
                        ></CartItem>
                    ))}
                </div>
            )
        }
        </div>
    );
}

export default CartContainer