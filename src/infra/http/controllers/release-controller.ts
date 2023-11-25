import { NextFunction, Request, Response } from 'express';
import PrismaPremiereRepository from '../../database/repositories/prisma-release-repository';
import ShowAllPremiere from '../../../use-cases/release-use-cases/show-all-release';
import { ReleaseModelView } from '../model-view/release-model-view';


export default class ReleaseController {
    async showAll(req: Request, res: Response, next: NextFunction) {
        const releaseRepository = new PrismaPremiereRepository();
        const showAllRelease = new ShowAllPremiere(releaseRepository);

        try {
            const releases = await showAllRelease.execute();
            const releasesToHttp = releases.map(ReleaseModelView.toHttp);
            return res.status(200).json(releasesToHttp);
        } catch (error) {
            next(error);
        }

    }
}