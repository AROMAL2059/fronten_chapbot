import React from 'react';
import { useSelector } from 'react-redux';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import BrowserRouter

const App = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);

  return (
    <Router> {/* Wrap the entire App with BrowserRouter */}
    <Switch>
      <Route path="/page2"> {/* Define a route for Page2 */}
        <Page2 />
      </Route>
      <Route path="/page3"> {/* Define a route for Page3 */}
        <Page3 />
      </Route>
      <Route path="/"> {/* Define a default route for Page1 */}
        {!name && !age && <Page1 />}
      </Route>
    </Switch>
  </Router>
);
};

export default App;
