import React from 'react'
import Stats from '../stats.js';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Overview</h1>

            <button><Link href="/game/settlements/polgamire">Polgamire</Link></button>
            <button>Crystal Pines</button>
            <button>Sea Port</button>
            <button>Hillcrest</button>
            <button>Silver Brook</button>
            <button>Storm Keep</button>

            <Stats />
        </div>
    )
}
