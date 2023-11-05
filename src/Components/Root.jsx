import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Main from './main/Main';
import Footer from './Footer/Foooter';


const Root = (props) => {
    return (
        <BrowserRouter>
            <Header state={props.state.loginState} />
            <Navigation />
            <Main state={props.state} dispatch={props.dispatch} />
            <Footer />
        </BrowserRouter>
    )
}

export default Root