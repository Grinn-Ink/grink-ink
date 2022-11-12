import { getDb } from '../getDb';
import { NewSeries } from './types';

export async function addSeries({
    description,
    coverUrl,
    slug,
    status,
    tags,
    title
}: NewSeries) {
    const db = getDb();

    return await db.series.create({
        data: {
            coverUrl,
            description,
            publishedAt: status ? new Date() : null,
            slug,
            status,
            tags,
            title
        }
    });
}
