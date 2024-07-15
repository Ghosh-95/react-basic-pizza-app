import { pizzaData } from "./data";

function Pizza({ data: { photoName, name, ingredients, price, soldOut } }) {

  return (
    <li className={`pizza ${soldOut && 'sold-out'}`}>
      <img src={photoName} alt={name + "image"} />
      <article>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>₹{+(price) * 80}</span>
        {soldOut && <p>SOLD OUT</p>}
      </article>
    </li>
  );
};

function Header() {
  return (
    <header className="header">
      <h1>Delicious React Foods</h1>
    </header>
  );
};

function Main() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <p>Authentic Italian cuisine & creative dishes to try. All from our hot oven, all Oraganic and Delicious. </p>

      {pizzaData.length > 0 ? (<ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza data={pizza} key={pizza.photoName} />
        ))}
      </ul>) : <p>We're still working on our menu. Please come back later :)</p>}
    </section>
  );
};

function Footer() {
  const openHour = 12, closeHour = 23;
  const isOpen = new Date().getHours() >= openHour && new Date().getHours() <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>{new Date().toLocaleTimeString()}, We are open now!</p> : <p>We are happy to welcome you between {openHour}:00 AM and {closeHour}:00 PM</p>}

        {isOpen && (<button className="btn">Order</button>)}
      </div>
    </footer>
  );
};


function App() {

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
