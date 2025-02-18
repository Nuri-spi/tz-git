import React from 'react'
import search from '../../assets/search.svg'
import bell from '../../assets/bell.svg'

const Header = () => {
    return (
        <div className=" container">
            <div className="header">
                <div className="logo">
                    <h2> <span>Search</span> Lance</h2>
                    <h6> Сервис поиска авто</h6>
                </div>
                <div className="text">
                    <h3><img src={search} alt=""/> Поиск заказов</h3>
                    <h3><img src={bell} alt=""/> Уведомления о заказах</h3>
                </div>
                <div>
                    <button className="btn">Личный кабинет</button>
                </div>
            </div>


        </div>
    )
}

export default Header