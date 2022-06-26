import React from 'react';
type Props = {
  header: string
}
export const AppHeader: React.FC<Props>=({header})=> {
  return (
    <header className='App-header'>
      <a
        className='App-link'
        href='https://mobx.js.org/README.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        {header}
      </a>
    </header>
  );
}
