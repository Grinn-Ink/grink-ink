import { deleteCache } from '../caching';
import { getDb } from '../getDb';

export async function deleteAuthor(id: number) {
    const db = getDb();

    await deleteCache(`/authors/${id}`);

    return await db.author.delete({
        where: {
            id
        }
    });
}
