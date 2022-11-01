import { Author } from '@prisma/client';
import { getDb } from '../client';

export async function addAuthor({
    about,
    name,
    profileUrl
}: Author) {
    const db = getDb();

    return await db.author.create({
        data: {
            about,
            name,
            profileUrl
        }
    });
}
