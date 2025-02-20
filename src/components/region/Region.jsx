// import React from 'react'
import Regi from '../../assets/regi.svg'
import Iks from '../../assets/iks.svg'
import Up from '../../assets/up.svg'
import Icon from '../../assets//icon.svg'
import Btn from '../../assets/btn.svg'
import Button from '../../assets/button.svg'
import './Reagion.css'
const Region = () => {
    return (
        <div className='container'>
           <div className='old-parent'>

            <div className='parent'>
                <div className='one'>
                    <img className='reg' src={Regi} alt="" />
                    <h4 className='poisk'>Регион поиска</h4>
                    <h4>Сбросить</h4>
                    <img className='iks' src={Iks} alt="" />
                    <h4>Свернуть</h4>
                    <img src={Up} alt="" />

                </div>

                <div className='twoo'>
                    <div>
                        <h3>Марка</h3>
                        <select>
                            <option>BMW</option>
                            <option>Toyota</option>
                            <option>Mazda</option>
                            <option>Honda</option>
                            <option>Subaru</option>
                        </select>
                        <h3>Тип</h3>
                        <img src={Btn} alt="" />
                        <h3>Объем двигателя, л</h3>
                        <select>
                            <option>2.0</option>
                            <option>1.8</option>
                            <option>5.5</option>
                            <option>3.2</option>
                            <option>1.6</option>
                        </select>
                        <h3>Трансмиссия</h3>
                        <select >
                            <option>Автомат</option>
                            <option>Механика</option>
                        </select>

                    </div>

                    <div>
                        <h3>Модель</h3>
                        <select>
                            <option>BMW M3 (G80) </option>
                            <option>Toyota Supra (A80, A90)</option>
                            <option>Mazda RX-7 (FB, FC, FD)</option>
                            <option>Honda CR-X</option>
                            <option>Subaru BRZ </option>
                        </select>
                        <h3>Пробег (км)</h3>
                        <div className='child'>
                            <button>Без пробега</button>
                            <button>70 000</button>
                        </div>
                        <h3>Мощность двигателя (л.с.)</h3>
                        <div className='sele'>
                            <select className='bir'>
                                <option>от</option>
                                <option></option>
                                <option></option>
                            </select>
                            <select className='eki'>
                                <option>до</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <h3>Привод</h3>
                        <img src={Button} alt="" />
                        <button className='best-btn'>Показать 5 404 предложения</button>
                    </div>

                </div>

            </div>

            <div className='texts'>
                <h2 >Задай параметры авто <br /> и регион поиска</h2>
                <h4>«Автокод» покажет авто со всех популярных досок объявлений: </h4>
                <h3>Drom.ru, Avito.ru, Auto.ru, Юла</h3>
            </div>
           </div>


        </div>
    )
}

export default Region






