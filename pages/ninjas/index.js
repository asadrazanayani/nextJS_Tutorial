import Head from "next/head";
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'


//getStatic runs before the render. that is at the build time.
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ninjas}) => {
    return ( <>
        <Head><title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas"></meta>
        </Head>
        <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => {
            return (<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
                <h3>{ninja.name}</h3>
            </a>
            </Link>)
        })}
        </div>
        </>);
}
 
export default Ninjas;