import { getDb } from '../client';

export async function deleteAuthor(id: number) {
    const db = getDb();

    return await db.author.delete({
        where: {
            id
        }
    });
}
