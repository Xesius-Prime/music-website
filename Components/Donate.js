import React from 'react'
import Link from "next/link";
import globalStyle from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div>

            <div className={globalStyle.donate}>
                <h3>This Website Currently Runs on Donations. <br />Please Consider Donating.</h3>

                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="NMDLJUNBCUK4C" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" />
                </form>

                <div className={globalStyle.thankYou}>
                    <h3>Thank You! :)</h3>
                </div>
            </div>
        </div>
    )
}
