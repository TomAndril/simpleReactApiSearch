import React from "react";
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="product-card">
        <h4>{this.props.title}</h4>
        <img src={this.props.img} alt={this.props.alt} />
      </div>
    );
  }
}

export default Card;
