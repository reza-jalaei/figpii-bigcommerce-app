import { NextApiRequest, NextApiResponse } from 'next';
// import { bigcommerceClient, getSession } from '../../lib/auth';

export default async function getStore(req: NextApiRequest, res: NextApiResponse) {
    try {
        //const { accessToken, storeHash } = await getSession(req);
        //const bigcommerce = bigcommerceClient(accessToken, storeHash, "v3");

       //const data = await bigcommerce.get('/content/scripts');

        res.status(200).json(req);
        throw req;
    } catch (error) {
        const { message, response } = error;
        res.status(response?.status || 500).json({ message });
    }
}
