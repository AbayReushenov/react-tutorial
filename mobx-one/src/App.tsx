import React from 'react';
import { MobxView } from './MobxView';
import './App.css';
import { AppHeader } from './AppHeader';
import { myTimer as newTimer } from './myTimer';

const App = () => {
  const myTimer = newTimer();

  return (
    <div className='App'>
      <AppHeader header='Learn Mobx ' />
      <div className='container'>
        <MobxView timer={myTimer} />
      </div>
    </div>
  );
};

export default App;
