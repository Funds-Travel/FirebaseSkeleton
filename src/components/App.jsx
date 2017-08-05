import React, { Component} from 'react';
import { firebaseApp } from '../firebase';


class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }
    


    render() {
        return (
            <div style={{margin: '5px'}}>
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/22/7/anigif_enhanced-4467-1398165063-19.gif?downsize=715:*&output-format=auto&output-quality=auto" alt="kitty" />
                <div style={{margin: '10px'}}>
                </div>
                <button
                className="btn btn-danger"
                onClick={() => this.signOut()}
                > Sign Out
                </button>
            </div>
        )
    }
}


export default App;