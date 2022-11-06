import { Author, Series } from '@prisma/client';
import { getDb } from '../getDb';

export async function removeSeriesAuthor(series: Series, author: Author) {
    const db = getDb();

    await db.series.update({
        data: {
            authors: {
                disconnect: [{ id: author.id }]
            }
        },
        where: {
            id: series.id
        }
    });
}
