import { deleteCache } from '../caching';
import { getDb } from '../getDb';
import { NewAuthor } from './types';

export async function addAuthor({
    about,
    name,
    profilePic,
    website,
    slug
}: NewAuthor) {
    const db = getDb();

    const author = await db.author.create({
        data: {
            about,
            name,
            profilePic,
            slug,
            website
        }
    });

    await deleteCache('/authors');

    return author;
}
