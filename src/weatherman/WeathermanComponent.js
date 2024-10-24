import {Rive, useRive, useStateMachineInput} from 'rive-react'
import weatherman from './weatherman.riv'

function WeathermanComponent(){
    console.log('buffer')
    const {rive, RiveComponent} = useRive({
      buffer: weatherman,
      src: weatherman,
      stateMachines: 'statemachine',
      autoplay: true
    })
  
    const weathermanStateSetter = useStateMachineInput(
      rive,
      "statemachine",
      "animation",
      0
    )
      
    return (<RiveComponent className='weatherman'/>)
}

export default WeathermanComponent