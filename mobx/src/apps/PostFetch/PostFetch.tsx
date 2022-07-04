import React from 'react';
import { observer } from 'mobx-react';
import { PostStore } from '../../store/posts';
import { Post } from './Post/Post';

interface Props {
  state: PostStore;
}
export const PostFetch: React.FC<Props> = observer(({ state }) => {
  const posts = state.posts.state;
  return (
    <div className='box box-lists'>
      <h1 className='red'>Functional component Mobx</h1>

      <h1>Posts</h1>
      <div className='posts'>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
});
