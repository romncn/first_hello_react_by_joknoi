import React from 'react';
import Navbar from './Components/Navbar';
import PostBox from './Components/PostBox';
import Comment from './Components/Comment';
import ReplyComment from './Components/ReplyComment';

function App() {
  const post = [
    {
      id : 3,
      comment : [
        {
          star : 4,
          id : "test1",
          reply : [
            {
              text : "testreply1"
            }
          ]
        },
        {
          star : 5,
          id : "test1",
          reply : [
            {
              text : "testreply1"
            }
          ]
        }
      ]
    },
    {
      id : 4,
      comment : [
        {
          star : 5,
          id : "test1",
          reply : [
            {
              text : "testreply1"
            }
          ]
        },
        {
          star : 5,
          id : "test1",
          reply : [
            {
              text : "testreply1"
            }
          ]
        }
      ]
    }
  ]

return(
  <div>
  <Navbar logo={"rom"} jok={"noi7"}>rom</Navbar>
  HelloWorld
<div class="row pl-3 pr-3" >

{
  post.map((data) =>{
    return (
        <div class= "col-6">
      <PostBox postid={data.id}>
      <div class="p-3">
      {data.comment.map((comment)=>{
        return (
          <Comment starnumber={comment.star} commentid={data.id}>
          {comment.reply.map((reply) => {
            return (
              <ReplyComment replytext={reply.text}/>
            )
          })}

          </Comment>
        )
      })}
       </div>
     </PostBox>
                 </div>
    )}
  )
}


          </div>
      </div>
      )
}

export default App;
