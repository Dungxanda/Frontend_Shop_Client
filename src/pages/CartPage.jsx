import CartContent from "../components/cart/CartContent";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <CartContent />
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
