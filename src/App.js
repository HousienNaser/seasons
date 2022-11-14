//import React from 'react';

import React from "react";

class App extends React.Component{
  constructor (props){
    super(props)
    // THIS THIS THE ONLY TIME we do direct assigment to 
    // thes.state 
    this.state={lat:null , err:""}

    window.navigator.geolocation.getCurrentPosition(
      // we called set.State !!!!!!!!!!!!!!!!!
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({err:err.message})
    )
  }

  render(){
   
    return <div>Latitude: {this.state.lat} 
            <br /> 
            Error:{this.state.err}

    </div>
    
    
  }
  
}

export default App;
