import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map( => `<li>${user.username}</li>`).join('');
    
    return (
      <div>
        {this.props.userCount}
        <ul>
          {users}
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
