import React,{ Component } from 'react'

class Timer extends Component{

    constructor(props){
        super(props)
        this.state = { seconds : 0 }
    }

    updateTimer(){
        this.setState(state =>({
            seconds : state.seconds + 1
        }))
    }

    componentDidMount(){
        this.interval = setInterval(() => this.updateTimer(),1000)
    }

    render(){
        return(
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }} >
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        )
    }

}

export default Timer



