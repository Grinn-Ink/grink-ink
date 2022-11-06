import { Author } from '@prisma/client';
import { deleteCache, writeCache } from '../caching';
import { getDb } from '../getDb';

export async function addAuthor({
    about,
    name,
    profilePic,
    website,
    slug
}: Author) {
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
