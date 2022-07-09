import React from 'react';
import { Car } from './apps/Car/Car';
import { DefaultHeader } from './apps/DefaultHeader/DefaultHeader';
import { ExplainBindingsComponent } from './apps/ExplainBindingsComponent/ExplainBindingsComponent';
import { ExplainShoudComponentUpdate } from './apps/ExplainShoudComponentUpdate/ExplainShoudComponentUpdate';
import { Header } from './apps/Header/Header';
import Michael from './apps/Michael/Michael';
import UnitOne from './apps/UnitOne/UnitOne';

interface Props {}
interface State {}
class App extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <>
        <DefaultHeader />
        <Header />
        <Car/>
        <ExplainBindingsComponent/>
        <ExplainShoudComponentUpdate/>
        <UnitOne />
        <Michael/>
        
      </>
    );
  }
}

export default App;
