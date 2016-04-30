import React from 'react';
import NavBar from './navBar';
import Weather from './weather';
import Bart from './bart';
import Nearby from './nearby';
import Movies from './movies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationTrue: ["Waiting on location data (async delay)...", "Waiting on location data (async delay)..."]
    };
    this.widgets = [{
      name: 'weather',
      deployed: true
    }, {
      name: 'bart',
      deployed: false
    }];
  }
  componentWillMount() {
    console.log('Main component will mount!');
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        // console.log(position);
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.setState({
          locationTrue: [lat, lng]
        });
      });
    }
    console.log('Main component mounted');
  }
  render() {
    return (
      <div style={{height: window.innerHeight*1.1, width: "100%"}}>
        <NavBar style={{paddingLeft: '0px', marginLeft: '0px'}} widgets={this.widgets} />
        <div className="bothcontainer" style={{display: "flex", width: "100%", height: "100%"}}>
          <div style={{width: "100%", height: "80%", flex: "1", border: "1px solid red"}} id={'widgets'}>
            <Weather location={this.state.locationTrue}/>
<<<<<<< 68a28c80cc0449d1ffc4a3539a16d9c2fadd0b4d
            <Nearby location={this.state.locationTrue}/>
=======
            <Movies location={this.state.locationTrue}/>
>>>>>>> core: built out movies API to send from client to server
            </div>
        </div>
        <Bart/>
      </div>

    );
  }
}

export default Main;
