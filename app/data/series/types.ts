import { Series as SeriesModel } from '@prisma/client';
import { Author } from '../authors';
import { Issue } from '../issues';

export type Series = Partial<SeriesModel & {
    authors: Author[];
    issues: Issue[];
}>;
