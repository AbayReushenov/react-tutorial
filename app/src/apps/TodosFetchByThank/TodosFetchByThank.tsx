import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchTodos } from '../../store/todos/fetchTodos';
import { Todos } from './Todos';

type Props = {};

export const TodosFetchByThank: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return <Todos />;
};
