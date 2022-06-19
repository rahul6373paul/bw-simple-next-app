import { useRouter } from 'next/router';

function ClientsProjectPage(){
    
    const router = useRouter();

    const value = router.query.id;

    function loadProjectHandler(){
        router.push('/clients/max/projectA')
    }
    
    return(
        <div>
            <h1>The project of a given client</h1>
            <button onClick={loadProjectHandler} >Load Project A</button>
        </div>
    )
}

export default ClientsProjectPage;