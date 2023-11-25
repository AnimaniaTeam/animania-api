import Release from 'app/entities/release';

export class ReleaseModelView {
    static toHttp(release: Release) {
        return {
            id: release.id,
            title: release.title,
            pathImage: release.pathImage,
            genres: release.genres,
            streaming: release.streaming,
            totalEpisodes: release.totalEpisodes,
            currentEpisode: release.currentEpisode,
            releaseDate: release.releaseDate,
            isAiring: release.isAiring,
            season: release.season,
            weeklyDayAiring: release.weeklyDayAiring,
            likes: release.likes,
            deslikes: release.deslike,
            createdAt: release.createdAt,
        };
    }
}