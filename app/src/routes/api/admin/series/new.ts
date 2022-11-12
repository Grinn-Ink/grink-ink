import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { addSeries, NewSeries } from '~/data';

const handler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method !== 'POST') {
        response.status(405);

        return;
    }

    const model: NewSeries = request.body;

    const tagsString: any = model.tags;

    model.tags = tagsString.split(' ');

    await addSeries(model);

    response.redirect('/admin/series').send(null);
};

export default withApiAuthRequired(handler);
