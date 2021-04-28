import React from "react";

class Pokemon extends React.Component {
  render() {
    const 
      {
        id,
        name,
        type,
        averageWeight: { value, measurementUnit},
        image,
        moreInfo,
      }
     = this.props.pokemon;
    return (
      <div>
        <div className="pokemon">
          <p>{name}</p>
          <p>{id}</p>
          <p>{type}</p>
          <div>
            <p>{value}</p>
            <p>{measurementUnit}</p>
            <img src={image} alt={name}></img>
            <p>{moreInfo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;