import { Replace } from 'app/helpers/replace';

export interface releaseProps {
    id: number
    title: string
    pathImage: string
    genres: string[]
    streaming: string
    totalEpisodes: number
    currentEpisode: number
    releaseDate: Date
    isAiring: boolean
    season: number
    weeklyDayAiring: string
    likes: number
    deslikes: number
    createdAt: Date
}

export default class Release {
    protected props: releaseProps;

    constructor(props: Replace<releaseProps, {createdAt?: Date}>){
        this.props ={
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    get id(): number {
        return this.props.id;
    }
    get title(): string {
        return this.props.title;
    }
    get pathImage(): string {
        return this.props.pathImage;
    }
    get genres(): string[]  {
        return this.props.genres;
    }
    get streaming(): string {
        return this.props.streaming;
    }
    get totalEpisodes(): number {
        return this.props.totalEpisodes;
    }
    get currentEpisode(): number {
        return this.props.currentEpisode;
    }
    get releaseDate(): Date {
        return this.props.releaseDate;
    }
    get isAiring(): boolean {
        return this.props.isAiring;
    }
    get season(): number {
        return this.props.season;
    }
    get weeklyDayAiring(): string {
        return this.props.weeklyDayAiring;
    }
    get likes(): number {
        return this.props.likes;
    }
    get deslike(): number {
        return this.props.deslikes;
    }
    get createdAt(): Date {
        return this.props.createdAt;
    }


}