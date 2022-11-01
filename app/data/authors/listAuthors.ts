import { getDb } from '../client';

export async function listAuthors() {
    const db = getDb();

    return await db.author.findMany({
        select: {
            name: true,
            profileUrl: true,
            slug: true
        },
        orderBy: {
            name: 'asc'
        }
    });
}
