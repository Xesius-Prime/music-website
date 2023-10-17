import globalStyle from '../../../styles/Home.module.css';


export default function messageSent() {



    return (
        <div className={globalStyle.center}>

            <h1>Message Sent!</h1>
            <br />

            <img src="https://simpletexting.com/wp-content/uploads/2022/05/text-messages-not-sending-768x432.jpeg" alt="" />

            <p>Your message has been <br /> successfully sent!</p>




        </div>
    )
}