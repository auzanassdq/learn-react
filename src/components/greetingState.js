import React from 'react'

// stateful component
class GreetingState extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'Auzan yg belajar react',
      toggle : false
    }
  }

  changeName = () => {
    this.setState(prevState => ({
      // name: "stateful component changed"
      toggle: !prevState.toggle
    }))
  }

  render(){
    return (
      <div onClick={this.changeName}>
        Hallo dari {this.state.toggle ? "yes" : "No"}
      </div>
    )
  }
}

export default GreetingState