import Link from 'next/link'

const Navbar = () => {
    return ( <nav>
        <div className='logo'>
            <h1>Ninja List</h1>
            <Link href='/'><a>Home</a></Link>
            <br/>
            <Link href='/about'><a>About</a></Link>
            <br/>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
            <br/>
            </div>
            </nav> );
}
 
export default Navbar;