import { Issue as IssueModel } from '@prisma/client';
import { Author } from '../authors';
import { Series } from '../series';

export type Issue = Partial<IssueModel & {
    authors: Author[];
    series: Series;
}>;
