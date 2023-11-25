import { Request, Response, NextFunction } from 'express';
import {resolve} from 'path';
import FindImage from '../../../use-cases/image-use-cases/find-image';


export default class ImageController {
    directory: string;

    constructor(directory: string) {
        this.directory = directory;
    }
    async getImage(req: Request, res: Response, next: NextFunction) {
        const nameImage = req.params.name;
        const pathImage = resolve(__dirname, '..', '..', '..', '..', 'tmp', this.directory, nameImage + '.jpg');
        const findImage = new FindImage();
        try {
            await findImage.execute(pathImage);
            return res.sendFile(pathImage);
        } catch (error) {
            next(error);
        }
    }
}