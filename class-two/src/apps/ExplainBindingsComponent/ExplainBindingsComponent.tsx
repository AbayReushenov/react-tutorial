import React from 'react';
import ExplainBindingsComponentUI from './ExplainBindingsComponentUI';

interface Props {}
interface State {
  useArrowToShowThisOrThisState: string;
}
export class ExplainBindingsComponent extends React.Component<Props, State> {
  state: { useArrowToShowThisOrThisState: string };
  constructor(props: Props) {
    super(props);
    this.state = { useArrowToShowThisOrThisState: '?' };
    this.onClickMeBind = this.onClickMeBind.bind(this);
  }
  onClickMeBind() {
    this.setState((prev) => ({
      ...prev,
      useArrowToShowThisOrThisState: new Date()
        .getSeconds()
        .toString()
        .concat(' sec bind by constructor Bind'),
    }));
  }
  onClickMeArrow = () => {
    this.setState((prev) => ({
      ...prev,
      useArrowToShowThisOrThisState: new Date()
        .getSeconds()
        .toString()
        .concat(' sec bind by Arrow'),
    }));
  };

  onClickMeThree() {
    this.setState((prev) => ({
      ...prev,
      useArrowToShowThisOrThisState: new Date()
        .getSeconds()
        .toString()
        .concat(' sec bind by Three'),
    }));
  }
  onClickMeBindIntoComponent() {
    this.setState((prev) => ({
      ...prev,
      useArrowToShowThisOrThisState: new Date()
        .getSeconds()
        .toString()
        .concat(' sec bind by Four'),
    }));
  }

  render() {
    return (
      <>
        <ExplainBindingsComponentUI
          onClickMe={this.onClickMeBind}
          useArrowToShowThisOrThisState={
            this.state.useArrowToShowThisOrThisState
          }
        />
        <ExplainBindingsComponentUI
          onClickMe={this.onClickMeArrow}
          useArrowToShowThisOrThisState={
            this.state.useArrowToShowThisOrThisState
          }
        />
        <ExplainBindingsComponentUI
          onClickMe={() => this.onClickMeThree()}
          useArrowToShowThisOrThisState={
            this.state.useArrowToShowThisOrThisState
          }
        />
        <ExplainBindingsComponentUI
          onClickMe={this.onClickMeBindIntoComponent.bind(this)}
          useArrowToShowThisOrThisState={
            this.state.useArrowToShowThisOrThisState
          }
        />
      </>
    );
  }
}
