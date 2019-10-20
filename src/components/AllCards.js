import React, { Component, Fragment } from "react";
import Card from "./Card";
import "./AllCards.css";
class AllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: "Spaghetti",
          img:
            "http://yesofcorsa.com/wp-content/uploads/2018/08/Spaghetti-Sauce-Desktop-Wallpaper-1024x683.jpg",
          ingredients: ["Spaghetti", "Tomato Sauce", "Salt"],
          instructions:
            "Just throw the spaghetti into cooking water and then cook the tomatosauce and add some salt to the spaghetti and sauce"
        },
        {
          name: "Spaghetti",
          img:
            "http://yesofcorsa.com/wp-content/uploads/2018/08/Spaghetti-Sauce-Desktop-Wallpaper-1024x683.jpg",
          ingredients: ["Spaghetti", "Tomato Sauce", "Salt"],
          instructions:
            "Just throw the spaghetti into cooking water and then cook the tomatosauce and add some salt to the spaghetti and sauce"
        },
        {
          name: "Spaghetti",
          img:
            "http://yesofcorsa.com/wp-content/uploads/2018/08/Spaghetti-Sauce-Desktop-Wallpaper-1024x683.jpg",
          ingredients: ["Spaghetti", "Tomato Sauce", "Salt"],
          instructions:
            "Just throw the spaghetti into cooking water and then cook the tomatosauce and add some salt to the spaghetti and sauce"
        },
        {
          name: "Bratpotatoes",
          img:
            "https://www.kuechengoetter.de/uploads/media/960x960/08/78978-bratkartoffeln.jpg?v=2-19",
          ingredients: ["Potatoes", "Salt Sauce", "Zwiebelz"],
          instructions:
            "Einfach Braten den Scheiss, dann wird das schon lecker. Man kann das mit vielen Sachen zusammen essen, mhhhhh."
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <div className="AllCards">
          {this.state.recipes.map(el => {
            return (
              <Card
                key={el.name + Math.random()}
                name={el.name}
                ingredients={el.ingredients}
                instructions={el.instructions}
                img={el.img}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default AllCards;
