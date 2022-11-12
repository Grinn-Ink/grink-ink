import { readCache, writeCache } from '../caching';
import { getDb } from '../getDb';
import { Author } from './types';

export async function findAuthor(id: number) {
    const cachedAuthor = await readCache<Author>('/authors');

    if (cachedAuthor) return cachedAuthor;

    const db = getDb();

    const author = await db.author.findFirst({
        select: {
            id: true,
            about: true,
            name: true,
            profilePic: true,
            slug: true,
            website: true,
            series: {
                select: {
                    coverUrl: true,
                    slug: true,
                    title: true
                },
                where: {
                    status: true
                }
            }
        },
        where: {
            id
        }
    });

    await writeCache(`/authors/${id}`, author);

    return author;
}
