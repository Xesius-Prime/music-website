import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Mike Tremblett</h1>

            <h2>Main Overview:</h2>
            <h3>10 students per week, <br /> at $20 USD per 30min lesson.</h3>
            <h3>Total per 4 weeks: <br /> ${10 * 20 * 4} USD / $1,086.53 CAD</h3>

            <br />



            <h2>Oct 10 2023</h2>

            <h2>What to Get Done</h2>

            <div className={globalStyle.leftAlign}>
                <h3>How many students do you want?</h3>
                <p>10 starter goal.</p>

                <h3>Payment:</h3>
                <p>- Payment Processing. Paypal and eTransfer <br />
                    - How much to charge? $20 USD</p>

                <h3>Advertisement</h3>
            </div>


        </div>
    )
}

export default index