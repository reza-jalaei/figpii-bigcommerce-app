import { NextApiRequest } from 'next';

import { getSession } from '@lib/auth';

import {getStoreAccessKey} from "@lib/dbs/mysql";

const isAuthenticated = async (req: NextApiRequest) => {

    const { storeHash } = await getSession(req);

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
            <h1>Hello</h1>
        )
    } else {
        return;
    }
};

export default Dashboard;
