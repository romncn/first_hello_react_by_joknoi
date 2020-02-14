import React from 'react';
import Comment from './Comment';

function PostBox(props) {
return(
<div class="border">
<h1>Post id: {props.postid}</h1>
<p>Comment:</p>
{props.children}
</div>

      )
}

export default PostBox;
