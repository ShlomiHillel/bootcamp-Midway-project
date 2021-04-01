
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NotFound from './Pages/NotFound';
import NavBar from './Components/Navbar';



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                <Route exact path="/"  component={MainPage}/>
                <Route component={NotFound}/>
                </Switch>
            
            </BrowserRouter>
            
        </div>
    );
}

export default Router;
