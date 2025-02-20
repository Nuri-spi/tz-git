
import bell from "../../assets/bell.png"
import imgForm from "../../assets/image1.png"
import imgLeft from "../../assets/image.png"

const ConnectNotification = () => {
    return (
        <div >
            <div className="container"
                style={{
                    width: '1240px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}
            >
                <div>
                    <img src={imgLeft} alt="" />
                </div>
                <div>
                    <img src={bell} alt="" />
                    <h3>Подключи уведомления</h3>
                    <p>Получай мгновенные сообщения
                        о новых объявлениях в Телеграм
                        или на почту. </p>
                    <img src={imgForm} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ConnectNotification