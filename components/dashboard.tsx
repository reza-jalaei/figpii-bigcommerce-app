import {useSession} from "../context/session";
import {getSession} from "@lib/auth";

import {getStoreAccessKey} from "@lib/dbs/mysql";

const isAuthenticated = async () => {

    const { context } = useSession();

    const getSessionInfo = await getSession(context);

    const storeStatus = await getStoreAccessKey(getSessionInfo.storeHash)

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
