import {useStoreHash} from "@lib/hooks";

import {getSession} from "@lib/auth";

import {getStoreAccessKey} from "@lib/dbs/mysql";

const context = useStoreHash();

const isAuthenticated = async () => {

    const storeStatus = await getStoreAccessKey(context)

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
