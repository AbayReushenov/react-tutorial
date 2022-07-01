import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsAsync } from '../../store/posts/fetchPosts';
import { Posts } from './Posts';

type Props = {};

export const PostsFetchBySaga: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return <Posts />;
};
