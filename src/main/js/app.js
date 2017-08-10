'use strict';

import React, {Component} from "react";
const ReactDOM = require('react-dom');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div id="main">
                        <h1>Spring Boot React Seed Application</h1>
                    </div>
                </div>
            </div>
        )

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);