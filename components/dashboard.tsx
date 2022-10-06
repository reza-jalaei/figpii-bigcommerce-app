import {getStoreAccessKey} from "@lib/dbs/mysql";

import {useStoreHash} from "@lib/hooks";

export async function isAuthenticated() {
    const storeHash = useStoreHash();
    const storeStatus = await getStoreAccessKey(storeHash)

    if (storeStatus == 1) {
        return true;
    } else {
        return false;
    }
}

const Dashboard = () => {
    if (isAuthenticated) {
        return (
            <h1>Registered</h1>
        )
    } else {
        return(
            <h1>Not registered</h1>
        )
    }
};

export default Dashboard;
