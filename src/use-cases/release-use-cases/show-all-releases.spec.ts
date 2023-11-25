import { describe, expect, it } from 'vitest';
import ShowAllRelease from './show-all-release';
import InMemoryReleaseRepository from '../../../tests/im-memory/repositories/in-memory-release-repository';


describe('Show All Premieres', () => {
    it('should be able to possible show all the Premieres ', async () => {
        const releaseRepository = new InMemoryReleaseRepository();
        const showAllPremiere = new ShowAllRelease(releaseRepository);
        const releases = await showAllPremiere.execute();
        
        expect(releases).toBe(releaseRepository.releases);
    });

    it('deve retornar null se não tiver lançamentos', async () => {
        const releaseRepository = new InMemoryReleaseRepository();
        const showAllPremiere = new ShowAllRelease(releaseRepository);
        releaseRepository.releases = [];
        const releases = await showAllPremiere.execute();

        expect(releases).toBeNull;
    });
});