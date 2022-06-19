import { useRouter } from 'next/router';

function SelectedClientProjectPage(){

    const router = useRouter();

    const value = router.query.clientprojectid;

    return(
        <div>
            <h1>The SelectedClientProject Page</h1>
            <h1>{value}</h1>
            <h1>{router.query.id} </h1>
        </div>
    )
}

export default SelectedClientProjectPage;