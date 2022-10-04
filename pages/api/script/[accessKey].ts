import { NextApiRequest, NextApiResponse } from 'next';
import { bigcommerceClient, getSession } from '../../../lib/auth';

export default async function getStore(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {
            query: { accessKey },
        } = req;

        const { accessToken, storeHash } = await getSession(req);
        const bigcommerce = bigcommerceClient(accessToken, storeHash, "v3");

        const data = await bigcommerce.post('/content/scripts', {
           name: "figpiiscript",
           description: "figpiiscript",
           html: `<script id="piiTester" type="text/javascript" async="async" crossorigin="anonymous" src="//tracking-cdn.figpii.com/${accessKey}.js"></script>`,
           auto_uninstall: true,
           load_method: "default",
           location: "head",
           visibility: "all_pages",
           kind: "script_tag",
           consent_category: "functional",
           enabled: true,
           channel_id: 1
        });

        await res.status(200).json(data);
    } catch (error) {
        const { message, response } = error;
        await res.status(response?.status || 500).json({message});
    }
}
