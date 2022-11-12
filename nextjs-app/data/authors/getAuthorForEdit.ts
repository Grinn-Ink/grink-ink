import { getDb } from '../getDb';

export async function getAuthorForEdit(id: number) {
    const db = getDb();

    return await db.author.findFirst({
        select: {
            id: true,
            about: true,
            name: true,
            profilePic: true,
            slug: true,
            website: true
        },
        where: {
            id
        }
    });
}
