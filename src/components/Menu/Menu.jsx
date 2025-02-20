import './Menu.css'
import lupat from '../../assets/lupat.svg'
import shere from  "../../assets/shere.svg"

const Menu = () => {
    return (
        <div>
            <div className="menu">
                <img src={shere} alt=""/>
                <img id={"lupa"} src={lupat} alt=""/>
                <h2>Сохрани поиски</h2>
                <p id={"nas"}>Настрой фильтры по автомобилям один раз, дальше поиск будет обновляться автоматически</p>
            </div>
            <div className="meni">
                <h6 id={"fil"}></h6>
                <h3 className={"lada"}>Лада Веста Спорт, 2019</h3>
                <p id={"probg"}>Пробег 93 000 км, 2 владельца, 1.8, автомат, без ДТП</p>
                <a className={"href"} href="">Проверить ТС</a>
                <p id={"sait"}>1 066 555₽ </p>
                <h6 id={"string"}></h6>
                <p id={"min"}>11 мин. назад</p>
            </div>
            <div className="men">
                <h6 id={"fil"}></h6>
                <h3 className={"lada"}>Лада Веста Спорт, 2019</h3>
                <p id={"probg"}>Пробег 93 000 км, 2 владельца, 1.8, автомат, без ДТП</p>
                <a className={"href"} href="">Проверить ТС</a>
                <p id={"sait"}>1 066 555₽ </p>
                <h6 id={"string"}></h6>
                <p id={"min"}>11 мин. назад</p>
            </div>
            <div className="menik">
                <h6 id={"fil"}></h6>
                <h3 className={"lada"}>Лада Веста Спорт, 2019</h3>
                <p id={"probg"}>Пробег 93 000 км, 2 владельца, 1.8, автомат, без ДТП</p>
                <a className={"href"} href="">Проверить ТС</a>
                <p id={"sait"}>1 066 555₽ </p>
                <h6 id={"string"}></h6>
                <p id={"min"}>11 мин. назад</p>
            </div>
        </div>
    );
};

export default Menu;