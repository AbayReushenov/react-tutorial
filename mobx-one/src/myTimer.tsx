import { Mobx } from './Mobx';

export const myTimer = (): Mobx => {
  const myTimer = new Mobx();

  setInterval(() => {
    myTimer.increase();
  }, 1000);
  return myTimer;
};
