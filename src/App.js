//import React from 'react';

import React from "react";

class App extends React.Component{
  constructor (props){
    super(props)

    this.state={lat:400}

    window.navigator.geolocation.getCurrentPosition(
      position => {this.setState({lat:position.coords.latitude})},
      err => console.log(err)
    )
  }

  render(){
   
    return <div>Latitude: {this.state.lat} </div>
  }
  
}

export default App;
