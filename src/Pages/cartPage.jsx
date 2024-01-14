import Header from "../Components/Header.jsx";
import CartContainer from "../Components/CartContainer.jsx";
import Footer from "../Components/Footer.jsx"
function CartPage(props) {
  return (
    <>
      <Header></Header>
      <CartContainer className = "CartContainerMain"
        items = {props.items}
        qty = {props.qty}
        cost = {props.cost}
        deleteItem = {props.deleteItem}
      ></CartContainer>
      <Footer></Footer>
    </>
  );
}

export default CartPage;
