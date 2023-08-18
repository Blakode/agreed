import './index.css';
import { BrowserRouter as Router ,Route,  Switch,} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Registration from './Registration';
import PageNotFound from './PageNotFound';
import CreatePDF from './CreatePDF';

function App() {
  return (
    <Router>
      <div className='container bg-slate-100'>
              <section className=''>
                  <div className=''>
                      <div className='py-4'>
                        <Navbar/>
                      </div>
                     <Switch>
                        <Route exact path='/'><Home /> </Route> 
                        <Route path='/register'><Registration/> </Route>
                        <Route path='/generate'><CreatePDF /></Route>
                        <Route path='*'><PageNotFound/> </Route>
                      </Switch>
              </div>
              </section>
      </div>
    </Router>


  );
}

export default App;
