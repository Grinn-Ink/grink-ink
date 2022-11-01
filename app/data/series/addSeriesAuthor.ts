import { Author, Series } from '@prisma/client';
import { getDb } from '../client';

export async function addSeriesAuthor(series: Series, author: Author) {
    const db = getDb();

    await db.series.update({
        data: {
            authors: {
                connect: [{ id: author.id }]
            }
        },
        where: {
            id: series.id
        }
    });
}
