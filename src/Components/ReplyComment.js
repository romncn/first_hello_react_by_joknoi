import React from 'react';


function ReplyComment(props) {
return(
<div class="border">
<p>{props.replytext}</p>
{props.children}
</div>

      )
}

export default ReplyComment;
