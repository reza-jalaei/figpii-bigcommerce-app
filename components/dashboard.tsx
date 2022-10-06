import {useEffect, useState} from 'react';
import { SessionContextProps } from '../types';

import {getStoreAccessKey} from "@lib/dbs/mysql";

const isAuthenticated = async (SessionContextProps) => {
    const storeHash = SessionContextProps.storeHash;
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
