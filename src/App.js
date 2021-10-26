import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const stayDetails = [
  {
    key: 1,
    image: "/images/room1.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Cozy, Peaceful, Spacious and Private room with",
    location: "Helsinki, Finland",
    guests: 3,
  },
  {
    key: 2,
    image: "/images/stay2.jpg",
    superhost: true,
    rating: "4.25",
    info: "Entire Apartment, 2 Beds",
    title: "Stylist apartment in the center of city",
    location: "Turku, Finland",
    guests: 1,
  },
  {
    key: 3,
    image: "/images/stay3.jpg",
    superhost: false,
    rating: "4.96",
    info: "Entire House",
    title: "Modern House in a remote area",
    location: "Oulu, Finland",
    guests: 2,
  },
  {
    key: 4,
    image: "/images/stay4.jpg",
    superhost: true,
    rating: "4.54",
    info: "Entire Apartment, 2 Beds",
    title: "Modern Apartment Close to Nature",
    location: "Vaasa, Finland",
    guests: 4,
  },
  {
    key: 5,
    image: "/images/stay5.jpg",
    superhost: true,
    rating: "4.62",
    info: "Private Room",
    title: "House in a remote area",
    location: "Helsinki, Finland",
    guests: 3,
  },
  {
    key: 6,
    image: "/images/stay6.jpg",
    superhost: true,
    rating: "4.85",
    info: "Entire house",
    title: "Stylist apartment in the center of city",
    location: "Vaasa, Finland",
    guests: 3,
  },
  {
    key: 7,
    image: "/images/stay7.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Stylist apartment in the center of city",
    location: "Oulu, Finland",
    guests: 2,
  },
  {
    key: 8,
    image: "/images/stay8.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Stylist apartment in the center of city",
    location: "Helsinki, Finland",
    guests: 5,
  },
];

function App() {
  const [location, setLocation] = useState();
  const [guestCount, setGuestCount] = useState();
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState();

  useEffect(() => {
    const list_of_Cards = stayDetails
      .filter(
        (element) =>
          (!location && !guestCount) ||
          (location &&
            guestCount &&
            location === element.location &&
            guestCount <= element.guests) ||
          (location && !guestCount && location === element.location) ||
          (!location && guestCount && guestCount <= element.guests)
      )
      .map((element) => (
        <Card
          key={element.key}
          image={element.image}
          superhost={element.superhost}
          rating={element.rating}
          info={element.info}
          title={element.title}
        ></Card>
      ));
    console.log(list_of_Cards);
    setCards(list_of_Cards);
    setCardsCount(list_of_Cards.length);
  }, [location, guestCount, setCards]);

  return (
    <div className="App">
      <header className="header-container">
        <div className="logo-container">
          <span className="triangle-logo"></span>
          <i className="fas fa-triangle"></i>
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
            <span className="material-icons">search</span>
          </button>
        </div>
      </header>

      <div className="title-container">
        <div className="main-title">Stays in Finland</div>
        <div className="property-count">{`${cardsCount} stays`}</div>
      </div>
      <div className="card-container">
        {cards.length ? cards : "No Stays Available"}
      </div>
    </div>
  );
}

export default App;
