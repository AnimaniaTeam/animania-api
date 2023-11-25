
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.admin.upsert({
        where: { email: 'admin@email.com' },
        update: {},
        create: {
            email: 'admin@email.com',
            password: '$2a$12$I6LREMEcp8.FfOLM6U3rU.OyA22D3p3LbfRdhQ.h2hkbSQmaZaMte', /* senha123 */
        },
    });
    await prisma.admin.upsert({
        where: { email: 'admin2@email.com' },
        update: {},
        create: {
            email: 'admin2@email.com',
            password: '$2a$12$mt1D27HIWDL0H8PnSQeWvO.4oEVE.Bj3HQXzOk7aHyOZqmKMlFVp.' /* senha456 */
        }
    });

    await prisma.release.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: 'One Piece',
            path_image: 'bhcbzhcvavc382y2.jpg',
            genres: ['aventura', 'ação'],
            streaming: 'Netflix',
            total_episodes: 1320,
            current_episode: 1321,
            release_date: new Date(2023 / 7 / 10),
            is_airing: true,
            season: 12,
            weekly_day_airing: 'Domingo',
            likes: 2000,
            deslikes: 236,
            created_at: new Date()
        }
    });

}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

