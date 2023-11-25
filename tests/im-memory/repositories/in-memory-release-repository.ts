import Release from '../../../src/app/entities/release';
import ReleaseRepository from '../../../src/app/repositories/release-repository';

export default class InMemoryReleaseRepository implements ReleaseRepository {
    public releases: Release[] = [];
    constructor() {
        const onePiece = new Release({
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
        const mashle = new Release({
            id: 1,
            title: 'One Piece',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: 'Church',
            totalEpisodes: 1322,
            currentEpisode: 4,
            releaseDate: new Date('2023/08/03'),
            isAiring: false,
            season: 7,
            weeklyDayAiring: 'Domingo',
            likes: 123,
            deslikes: 9,
        });

        this.releases.push(onePiece, mashle);

    }
    async showAll(): Promise<Release[] | null>  {
        const releases = this.releases; 

        if(!releases) {
            return null;
        }

        return releases;
    }
}