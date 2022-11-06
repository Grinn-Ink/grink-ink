import { Author } from '@prisma/client';
import { deleteCache } from '../caching';
import { getDb } from '../getDb';

export async function editAuthor(id: number, {
    about,
    name,
    profilePic,
    slug,
    website
}: Author) {
    const db = getDb();

    await deleteCache(`/authors/${id}`);

    return await db.author.update({
        data: {
            about,
            name,
            profilePic,
            slug,
            updatedAt: new Date(),
            website
        },
        where: {
            id
        }
    });
}
