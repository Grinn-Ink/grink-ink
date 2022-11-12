import { getDb } from '../getDb';

export async function getAuthors() {
    const db = getDb();

    return await db.author.findMany({
        orderBy: {
            name: 'asc'
        }
    });
}
