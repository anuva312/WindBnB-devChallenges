import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="logo-container">
          {/* <span className="triangle-logo"></span> */}
          <i class="fas fa-triangle"></i>
          <span className="logo-name">windbnb</span>
        </div>
        <div className="filter-options-container">
          <button id="location" className="filter-option">
            Add location
          </button>
          <button id="guests" className="filter-option">
            Add guests
          </button>
          <button id="search" className="filter-option">
            <span class="material-icons">search</span>
          </button>
        </div>
      </header>

      <div className="title-container">
        <div className="title">Stays in Finland</div>
        <div className="property-count">{`stays`}</div>
      </div>
      <div className="card-container">
        <Card
          image="/images/room1.jpg"
          superhost={true}
          rating="4.5"
          info="Private Room"
          title="Stylist apartment in the center of city"
        />
      </div>
    </div>
  );
}

export default App;
