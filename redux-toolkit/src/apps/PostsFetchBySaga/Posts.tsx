import { useSelector } from 'react-redux';
import { selectPosts } from '../../store/posts/selectors';
import { Post } from './Post/Post';

export const  Posts=()=> {
  const posts = useSelector(selectPosts);

  return (
    <div className='box box-lists'>
      <h1 className='red'>Functional component Saga</h1>

      <h1>Posts</h1>
      <div className='posts'>
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
