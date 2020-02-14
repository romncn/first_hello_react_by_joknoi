import React from 'react';

function Comment(props) {
return(
<div class="border">
<p>{props.starnumber}star from id: {props.commentid}</p>
{props.children}

</div>

      )
}

export default Comment;
