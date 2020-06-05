import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';

class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage {...this.props.message} />;
    case 'emoji':
      return <EmojiMessage {...this.props.message} />;
    case 'file':
      return <FileMessage {...this.props.message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  render () {
    let contentClassList = [
      'sc-message--content',
      (this.props.message.author === this.props.me ? 'sent' : 'received')
    ];

    const isSent = this.props.message.author === this.props.me

    return (
      <div className="sc-message">
        <div className={contentClassList.join(' ')}>
          <div className={`sc-message--avatar ${this.props.message.author == "Kenny Rogers" ? "kenny" : "" } ${  isSent ? "me" : "" }`}></div>
          <div className="sc-message--name">{this.props.message.author}</div>
            {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>
    );
  }
}

export default Message;
