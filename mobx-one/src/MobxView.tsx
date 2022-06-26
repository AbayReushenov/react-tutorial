import React from 'react'
import { observer } from "mobx-react"
import { Mobx } from './Mobx';

interface Props {
  timer: Mobx
}
export const MobxView: React.FC<Props> = observer(({ timer }) => (
  <button className='MobxView' onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

