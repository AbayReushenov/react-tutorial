import React from 'react';
import { store } from './Store/Store';
import { Display } from './apps/Display/Display';
import { Input } from './apps/Input/Input';
import { InputNumber } from './apps/InputNumber/InputNumber';

import './App.css';



function App() {
  return (
    <div className='main'>
      <Display
        store={store}
      />
      <div className='container'>
        <Input
          store={store}
        />
        <InputNumber
          store={store}
        />
      </div>
    </div>
  );
}

export default App;
