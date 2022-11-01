import { Author } from '@prisma/client';
import { getDb } from '../client';

export async function editAuthor(id: number, {
    about,
    name,
    profileUrl,
    slug
}: Author) {
    const db = getDb();

    return await db.author.update({
        data: {
            about,
            name,
            profileUrl,
            slug,
            updatedAt: new Date()
        },
        where: {
            id
        }
    });
}
