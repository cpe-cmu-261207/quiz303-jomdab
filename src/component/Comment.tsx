
import { CommentType } from "../data/comments";
import { Reply } from "./Reply";

export const Comment = (data:CommentType) => {
    return(
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={data.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{data.username}</p>
              <p>{data.commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              {data.likeNum>0?<div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{ data.likeNum+" คน"}</p>
              </div>:null
              }
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          {
              data.replies.map((x)=>{
                return <Reply username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} 
                likeNum={x.likeNum} replies={x.replies}></Reply>
              })
          }

        </div>

    )
} 