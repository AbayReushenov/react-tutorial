import React from 'react'
import { Post as IPost} from '../../../api/posts';

interface Props{
  post: IPost
}
export const Post: React.FC<Props>=({post})=> {
  return (
    <div>ID:{post.id} Title: {post.title}</div>
  )
}

