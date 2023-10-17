import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Teaching</h1>
            <h2>Enable Original Sound on Zoom</h2>
            <br /> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/U577ClnRosE?si=jiBB6TuGkyMfkqxS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>
        </div>
    )
}

export default index