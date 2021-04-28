import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const {
      name,
      id,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;
    return (
      <div>
        {id} {name} {value} {measurementUnit} <img src={image} alt={name}></img>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Pokemon;
