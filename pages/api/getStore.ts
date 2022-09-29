import { NextApiRequest, NextApiResponse } from 'next';
import { bigcommerceClient, getSession } from '../../lib/auth';

export default async function getStore(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { accessToken, storeHash } = await getSession(req);
        const bigcommerce = bigcommerceClient(accessToken, storeHash, "v2");

        const data = await bigcommerce.get('/store');
        res.status(200).json(data);
    } catch (error) {
        const { message, response } = error;
        res.status(response?.status || 500).json({ message });
    }
}
