import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {

  return (
    // Este componente me permite usar de ahi para abajo el enrutado de react
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Esta parte funciona como el block content de django */}
          {/* Segun la ruta elegida, se renderiza uno de los Route */}
          
          <Switch >
            {/* Si no pongo el exact el primer substring del navegador que matche con el path ya entra */}
            <Route exact path="/">
              <Home />
            </Route>
      
            <Route exact path="/blogs">
              <Blog />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
