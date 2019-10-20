import React, { Component, Fragment } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <img src={this.props.img} alt="" />
          <h3>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
            <i className="fas fa-utensils"></i>
          </h3>
          <h4>Ingredients</h4>
          <ul>
            {this.props.ingredients.map(el => {
              return <li key={el}>{el}</li>;
            })}
          </ul>
          <h4>Instructions</h4>
          <p>{this.props.instructions}</p>
        </div>
      </Fragment>
    );
  }
}

export default Card;
