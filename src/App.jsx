function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza focaccia image" />
      <h2>Focaccia Pizza</h2>
    </div>
  );
};

function Header() {
  return (
    <header>
      <h1>Delicious React Foods.</h1>
    </header>
  );
};

function Main() {
  return (
    <section>
      <h2>Our Menu</h2>
      <Pizza />
    </section>
  );
};

function Footer() {
  return (
    <footer>
      <p>{new Date().toLocaleTimeString()}, We are open now!</p>
    </footer>
  )
}


function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
