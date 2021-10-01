import './App.css';
import './assets/fonts/earthorbiter.ttf';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Pictures from './pages/Pictures/Pictures'
import About from './pages/About/About'
import Solar from './pages/Solar/Solar';

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/pictures-of-the-day' component={Pictures}/>
          <Route exact path='/solar-system' component={Solar}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
