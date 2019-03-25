import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map(user => `<li>${user.username}</li>`).join('');
    
    return (
      <div>
        <ul>
          {users}
          <li>{this.props.userCount}</li>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  };
}

export default connect(mapStateToProps)(Users);
