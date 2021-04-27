import React from 'react';
import PropTypes from 'prop-types'

class UserProfile extends React.Component {
  render() {
    const { id, name, email, avatar} = this.props.person;
    return (
      <div>
        <span>{name}, tem o seguinte email: {email}</span>
        <br />
        <span>Além disso, seu id é {id} e seu avatar é esse aqui: <img src={avatar} alt="avatar" width="100"></img></span>
        <br />
        <br />
      </div>
    )
  }
}

UserProfile.propTypes = {
  person: PropTypes.object.isRequired
}

export default UserProfile;