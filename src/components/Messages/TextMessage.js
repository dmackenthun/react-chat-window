import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return (
  <div>
    <div className="sc-message--avatar">
      {props.author}
    </div>
    <div className="sc-message--text">{
        <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
      }</div>;
  </div>
    
)};

export default TextMessage;
