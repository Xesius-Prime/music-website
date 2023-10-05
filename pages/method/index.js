import globalStyle from '../../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={globalStyle.center}>

            <h1>Devonshire Music Method</h1>

            <Image
                src='/music website main page.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.padText}>
                <p>I should make an introductory video welcoming people to the site and explaining all the important things about it, but first I should probably make the text script.</p>
                <p>Welcome to my website!</p>
                <p>This website is a music method, <br /> compiled by: William Devonshire, to help teach music ideas.</p>
            </div>



        </div>
    )
}