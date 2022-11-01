import { getDb } from '../client';

export async function findAuthor(id: number) {
    const db = getDb();

    return await db.author.findFirst({
        select: {
            id: true,
            about: true,
            name: true,
            profileUrl: true,
            slug: true,
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
}
