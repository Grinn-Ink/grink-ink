import { PrismaClient } from '@prisma/client';

let client: PrismaClient;

export const getDb = () => {
    if (!client) {
        client = new PrismaClient();
    }

    return client;
}
