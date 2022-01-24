//src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './comp/contact';
import Update from './comp/update';
import Create from './comp/create';
 
class App extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path='/' component={Contact} />
                  <Route path='/update/:id' component={Update} />
                <Route path='/create' component={Create} /> 
            </div>
            </Router>
        );
    }
}
export default App;