import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });
  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart)=>{
      const updatedItems
    })

  }
  return (
    <>
      <Header />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </>
  );
}

export default App;
