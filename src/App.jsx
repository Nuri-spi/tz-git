import ConnectNotification from './components/connect-notification/ConnectNotification'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer.jsx";
import Region from './components/region/Region'
import Menu from "./components/Menu/Menu.jsx";


const App = () => {
    return (
        <div>
            <Header/>
            <ConnectNotification/>
            <Region/>
            <Menu/>
            <Footer/>

        </div>
    )

}

export default App