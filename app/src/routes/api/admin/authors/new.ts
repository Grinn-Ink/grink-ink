import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { addAuthor, NewAuthor } from '~/data';

const handler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method !== 'POST') {
        response.status(405);

        return;
    }

    const model: NewAuthor = request.body;

    await addAuthor(model);

    response.redirect('/admin/authors').send(null);
};

export default withApiAuthRequired(handler);
