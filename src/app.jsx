import React, {Component} from "react";

class App extends Component{
    render(){
        return (
            <div className = "root">
                <div className = "root__left">
                    Left Panel
                </div>
                <div className = "root__main">
                    Right Panel
                </div>
            </div>
        );
    }
}

export default App;