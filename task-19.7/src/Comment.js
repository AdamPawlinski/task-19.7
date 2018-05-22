import React from 'react';
import thumbUpComment from './actions';
import thumbDownComment from './actions';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => <li>{text} <br/> <span>votes: {votes}</span><br/><button onClick={() => thumbUpComment(id)} className="buttonUp">Thumb up</button><button onClick={() => thumbDownComment(id)} className="buttonDown">Thumb down</button></li>;

export default Comment;
