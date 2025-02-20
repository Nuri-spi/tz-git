import ConnectNotification from './components/connect-notification/ConnectNotification'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer.jsx";
import CarAd from "./components/CarAd/CarAd.jsx";

const App = () => {
    return (
        <div>
            <Header/>
            <ConnectNotification/>
            <CarAd/>
            <Footer/>

        </div>
    )
}

export default App