import profilepictures from './assets/finn.jpg';
import jakethedog from './assets/jakethedog.jpg';
import gumball from './assets/gumball.jpg';
import darwin from './assets/darwin.jpg';
import mrbean from './assets/mrbean.png';
const cardDetails = [
  {
    image: profilepictures,
    name: "Finn ",
    description: "Email: Finn@gmail.com",
  },
  {
    image: jakethedog,
    name: "Jake ",
    description: "Email: Jake@gmail.com",
  },
  {
    image: gumball,
    name: "Gumball",
    description: "Email: Gumball@gmail.com",
  },
  {
    image: darwin,
    name: "Darwin",
    description: "Email: Darwin@gmail.com",
  },
  
  {
    image: mrbean,
    name: "Mr. Bean",
    description: "Email: Bean@gmail.com",
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