import React, { Component } from 'react';
import UserContext from '../../Contexts/UserContext';
<<<<<<< HEAD
=======
import ProfileService from '../../services/profile-service';
import socket from '../../socket';
>>>>>>> 9416de6b1738e97ccc944e8c6d803ac8963e3597

import Chat from '../../components/Chat/Chat';

class MessagePage extends Component {
  state = { 
    messages: [],
    user: null,
    partner: null
  }

  static contextType = UserContext;

<<<<<<< HEAD
  componentDidMount() {
    const { socket, user_id } = this.context;
=======
  componentDidMount = () => {
>>>>>>> 9416de6b1738e97ccc944e8c6d803ac8963e3597
    const { chatPartner } = this.props.match.params;
    socket.emit('newUser', user_id);
    socket.emit('chatOpen', { 
      userId: user_id,
      receiverId: chatPartner
    });
    this.handleSocketListeners(this.context.user_id, chatPartner);
    this.setUsers()
  }

  handleSubmitMessage = (text) => {
    const { socket, user_id } = this.context;
    const { chatPartner } = this.props.match.params;
    socket.emit('message', { 
      text, 
      sender_id: user_id, 
      receiver_id:  chatPartner
    });
  }

  handleSocketListeners = () => {
    const { socket } = this.context;
    socket
      .on('priorMessages', messages => {
        this.setState({ messages })
      })
      .on('incomingMessage', message => {
        let { messages } = this.state
        messages.push(message)
        this.setState({ messages })
      });
  }

  setUsers = async () => {
    const user = await ProfileService.getProfile(this.context.user_id);
    const partner = await ProfileService.getProfile(this.props.match.params.chatPartner);
    this.setState({user, partner})
  }

  render() {
    if (this.state.user && this.state.partner) {
      return ( 
        <Chat onSend={this.handleSubmitMessage} user={this.state.user} partner={this.state.partner} messages={this.state.messages} user_id={this.context.user_id} />
      );
    } else {
      return (
        <main className='chat__loading-container'>
          <p className='chat__loading'>Chat Loading...</p>
        </main>
      )
    }
  }
}
 
export default MessagePage;