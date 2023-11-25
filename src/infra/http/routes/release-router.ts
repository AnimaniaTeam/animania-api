import { Router } from 'express';
import ReleaseController from '../controllers/release-controller';
import ImageController from '../controllers/image-controller';

const releaseRouter = Router();

const releaseController = new ReleaseController();
releaseRouter.get('/release', releaseController.showAll);

const imageController = new ImageController('images');
releaseRouter.get('/release/image/:name', (req, res, next) => {
    imageController.getImage(req, res, next);
});

export default releaseRouter;