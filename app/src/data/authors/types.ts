import { Author as AuthorModel } from '@prisma/client';

export type Author = Partial<AuthorModel>;

export type NewAuthor = Pick<AuthorModel, 'about' | 'name' | 'profilePic' | 'slug' | 'website'>;
