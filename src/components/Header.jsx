export default function Header({ cart, onUpdateCartItemQuantity }) {
  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button>Cart </button>
        </p>
      </header>
    </>
  );
}
