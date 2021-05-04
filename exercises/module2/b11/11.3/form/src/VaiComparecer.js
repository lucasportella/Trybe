import React, { Component } from 'react';

class VaiComparecer extends Component {
  render() {
    const { handleChange, vaiComparecer } = this.props;
    return (
      <label>
        <input name="vaiComparecer" value={vaiComparecer}type="checkbox" onChange={handleChange}></input>
      </label>
    )
  }
}

export default VaiComparecer;