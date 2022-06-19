import { useRouter } from 'next/router';

function PortfolioProjectPage(){

    const router = useRouter();

    const value = router.query.projectid;

    return(
        <div>
            <h1>The Portfolio Project Page</h1>
            <h1>{value}</h1>
        </div>
    )
}

export default PortfolioProjectPage;