import profilepictures from './assets/finn.jpg';
import jakethedog from './assets/jakethedog.jpg';
import gumball from './assets/gumball.jpg';
import darwin from './assets/darwin.jpg';
import mrbean from './assets/mrbean.png';
const cardDetails = [
  {
    image: profilepictures,
    name: "Finn ",
    description: "I program cool stuffs",
  },
  {
    image: jakethedog,
    name: "Jake ",
    description: "I love sandwiches",
  },
  {
    image: gumball,
    name: "Gumball",
    description: "I love potatoes",
  },
  {
    image: darwin,
    name: "Darwin",
    description: "Fish are my best friends",
  },
  
  {
    image: mrbean,
    name: "Mr. Bean",
    description: "Meet Teddy",
  },
];

function Card() {
  return (
    <div>
      {cardDetails.map((card, index) => (
        <div className="card" key={index}>
          <img className="pic" alt="Profile Picture" src={card.image} />
          <h2 className="description">{card.name}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;