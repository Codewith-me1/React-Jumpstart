import React from "react";
import CardItems from "./cardItems";
import "./Cards.css";
const cardData = [
  { title: "Title 1", text: "This is Text 1", link: "/" },
  { title: "Title 2", text: "This is Text 2", link: "/" },
  { title: "Title 3", text: "This is Text 3", link: "/" },
  { title: "Title 4", text: "This is Text 4", link: "/" },
  { title: "Title 5", text: "This is Text 5", link: "/" },
  { title: "Title 6", text: "This is Text 6", link: "/" },
];

const Cards = () => {
  return (
    <>
      <div className="section_2">
        <h2 className="section2-heading">Check Out the Destination!!</h2>
        <div className="cards">
          {cardData.map((card, index) => (
            <CardItems
              key={index} // Use a unique key for each item
              title={card.title}
              text={card.text}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
