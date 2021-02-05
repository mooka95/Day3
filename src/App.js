
import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import  Home from   './Components/Home/Home.js'
import NotFound from './Components/NotFound/NotFound.js'
import ArtistDetails from './Components/ArtistDetails/ArtistDetails.js'

const App=()=> {
  return (
    <Router>
      <Switch>
       <Route path='/ArtistDetails/:id' component={ArtistDetails}/>
       <Route path='/Home' component={Home}/>
      <Route path='/'  component={Home} exact/>
      <Route path='*' component={NotFound}/>
     
      </Switch>





    </Router>
  );
}

export default App;
