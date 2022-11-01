import { getDb } from '../client';

export async function getAuthorForEdit(id: number) {
    const db = getDb();

    return await db.author.findFirst({
        select: {
            id: true,
            about: true,
            name: true,
            profileUrl: true,
            slug: true
        },
        where: {
            id
        }
    });
}
