
import {Kolo, Logo, Poisk} from "../../assets/index.js";
import "./Footer.css"

const Footer = () => {
    return (
        <div className={"container "}>
            <div className={"foot"}>
                <img  className={"logo1"} src={Logo}/>

                <div className={"text1"}>
                    <img src={Poisk}/>
                    <h4>Поиск заказов</h4>
                </div>

                <div className={"text2"}>
                    <img src={Kolo}/>
                    <h4>Уведомления о заказах</h4>
                </div>

            </div>

            <button className={"bt2"}> Личный кабинет</button>

            <div className={"p2"}>
                <h2> Сервис поиска авто</h2>
                <p>
                    SearchLance 2022. Политика обработки персональных данных
                </p>
            </div>
        </div>
    );
};

export default Footer;