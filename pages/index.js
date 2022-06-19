import Link from 'next/link';

function HomePage(){
    return(
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link prefetch href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link prefetch href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;