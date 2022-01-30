//getstaticpaths. How many html pages next will build based on our data
//vs getstaticprops. How many props for each pages in the staticpaths
//both run at build-time

import Ninjas from ".";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // path is  list of all the different paths.
    const paths = data.map(user => {
        return {
            params: { id: user.id.toString()}
        }
    })
    // dont really understand this return
    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await (await res).json();

    return {
        props: {ninja: data}
    }

}

const Details = ({ninja}) => {
    return (<div>
        <h1>
            {ninja.name}
        </h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>  );
}
 
export default Details;