import Link from 'next/link'
import { useEffect } from 'react'; // to redirect user automatically.
import { useRouter } from 'next/router'; // this is the royter
import Head from 'next/head';
const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1); // to back . like press back once
            //or 
            router.push('/')
        }, 3000)
        console.log('use effect rant')

    })

    return ( 
        <>
        <Head><title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
        </Head>
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page is not found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
        </>
     );
}
 
export default NotFound;