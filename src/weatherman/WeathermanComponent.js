import {Rive, useRive, useStateMachineInput} from 'rive-react'
import weatherman from './weatherman.riv'

function WeathermanComponent(){
    const {rive, RiveComponent} = useRive({
        src: weatherman,
        stateMachines: 'statemachine',
        autoplay: true
    })
      
    return (<RiveComponent />)
}

export default WeathermanComponent