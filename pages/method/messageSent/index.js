import globalStyle from '../../../styles/Home.module.css';
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function messageSent() {
    const router = useRouter();

    useEffect(() => {
        // Define the element you want to scroll to
        const targetElement = document.getElementById("target-element");

        // Check if the router's pathname matches the target page
        if (router.pathname === "/method/messageSent") {
            // Scroll to the target element when the page loads
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [router.pathname]);


    return (
        <div className={globalStyle.center}>

            <h1 id="target-element">Message Sent!</h1>
            <br />

            <img src="https://simpletexting.com/wp-content/uploads/2022/05/text-messages-not-sending-768x432.jpeg" alt="" />

            <p>Your message has been successfully sent!</p>




        </div>
    )
}