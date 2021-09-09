import React from 'react';
import logo from './logo.svg';
import { Comment } from './component/Comment';
import './App.css';
import { comments } from './data/comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/rai.jpg"></img>
            <span className='font-semibold text-lg'>Supak Chainetkasem 630610769</span>
          </div>

          {/* status message */}
          <p>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>0 คน</p>
          </div>

        </div>

        {/* comments section */}
            {
              comments.map((x)=>{
                return <Comment username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} 
                likeNum={x.likeNum} replies={x.replies}></Comment>
              })
            }
          

      </div>
    </div>
  );
}

export default App;
