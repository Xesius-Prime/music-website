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
            <div className={globalStyle.leftAlign}>
                <p>The Method is a compilation of all my music knowledge, coupled in the most digestible format I can, using videos, games, stories, and general fun.</p>
            </div>



        </div>
    )
}