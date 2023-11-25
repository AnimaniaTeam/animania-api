import Release from 'app/entities/release';
import ReleaseRepository from 'app/repositories/release-repository';

export default class ShowAllPremiere {
    constructor(private releaseRepository: ReleaseRepository){}

    async execute(): Promise<Release[] | null> {
        const releases = await this.releaseRepository.showAll();
        return releases;
    }
}