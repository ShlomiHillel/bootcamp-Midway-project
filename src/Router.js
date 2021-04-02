
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NotFound from './Pages/NotFound';
import NavBar from './Components/Navbar';
import LocWeather from './Components/LocWeather'


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <LocWeather />
                <Switch>
                <Route exact path='/Main'  component={MainPage}/>
                
                <Route component={NotFound}/>
                </Switch>
            
            </BrowserRouter>
            
        </div>
    );
}

export default Router;



// for props f
// <Route path='/MainPage' render={(props) => (<MainPage {...props} isAuthed={true} />)}/>
