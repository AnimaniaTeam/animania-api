import { describe, expect, it } from 'vitest';
import Premiere from './release';
import Release from './release';

describe('Entitie Release', () => {
    it('should be able create a instance of Release', () => {
        const release = new Release({
            id: 1,
            title: 'One Piece',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: 'Church',
            totalEpisodes: 1322,
            currentEpisode: 4,
            releaseDate: new Date('2023/08/03'),
            isAiring: true,
            season: 7,
            weeklyDayAiring: 'Domingo',
            likes: 123,
            deslikes: 9,

        });

        expect(release).instanceOf(Release);
    });
});