import { premiere as RawPremiere } from '@prisma/client';
import Premiere from '../../../app/entities/premiere';



export class PrismaPremiereMapper {
    static toDomain(raw: RawPremiere){
        return new Premiere({
            id: raw.id,
            title: raw.title,
            pathImage: raw.path_image,
            genres: raw.genres,
            streaming: raw.streaming,
            totalEpisodes: raw.total_episodes,
            currentEpisode: raw.current_episode,
            releaseDate: raw.release_date,
            isAiring: raw.is_airing,
            season: raw.season,
            weeklyDayAiring: raw.weekly_day_airing,
            likes: raw.likes,
            deslikes: raw.deslikes,
            createdAt: raw.created_at
        });
    }
}