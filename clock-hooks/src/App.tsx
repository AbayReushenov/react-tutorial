import React from 'react';
import './App.css';
import { Clock } from './components/Clock';
import { FormattedDate } from './components/FormattedDate';
import { FormattedDateMicroSeconds } from './components/FormattedDateMicroSeconds';
import { data } from './data/data';
import { Step } from './data/Step';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {data.map((data) => (
          <>
            <Clock data={data} step={Step.Second} formatted={FormattedDate} />
            <Clock
              data={data}
              step={Step.OneTenthSecond}
              formatted={FormattedDateMicroSeconds}
            />
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
