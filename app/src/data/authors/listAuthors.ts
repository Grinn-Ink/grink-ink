import { readCache, writeCache } from '../caching';
import { getDb } from '../getDb';
import { Author } from './types';

export async function listAuthors() {
    const cachedAuthors = await readCache<Author[]>('/authors');

    if (cachedAuthors) return cachedAuthors;

    const db = getDb();

    const authors = await db.author.findMany({
        select: {
            name: true,
            profilePic: true,
            slug: true
        },
        orderBy: {
            name: 'asc'
        }
    });

    await writeCache('/authors', authors);

    return authors;
}
