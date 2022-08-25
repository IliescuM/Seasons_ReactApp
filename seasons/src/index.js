//  App
//  ||
//  vv
//  SeasonDisplay
import React from 'react';
import ReactDOM from 'react-dom';
// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return (
//         <div>Latitude: </div>
//     );


// };
class App extends React.Component {
    // constructor(){}
    constructor(props) {
        super(props);
        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null };
    }

    // React says we have to define render!!

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setstate !!!!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
        return (
            <div>Latitude: {this.state.lat} </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
