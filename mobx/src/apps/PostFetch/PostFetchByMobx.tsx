import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {PostStore } from '../../store/posts';
import { PostFetch } from './PostFetch';

interface Props {
  state: PostStore;
}
export const PostFetchByMobx: React.FC<Props> = observer(({ state }) => {

  useEffect(() => {
    state.fetchPostAsync();
  },[state]);

  return <PostFetch state={state} />;
});
