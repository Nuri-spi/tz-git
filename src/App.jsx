
import ConnectNotification from './components/connect-notification/ConnectNotification'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer.jsx";
import Region from './components/region/Region'


const App = () => {
    return (
        <div>
            <Header/>
            <ConnectNotification/>
            <Region/>

            <Footer/>

        </div>
    )
}

export default App