import { NotFoundError } from '../../app/helpers/api-error';
import fs from 'fs/promises';



export default class FindImage {

    async execute(pathImage: string): Promise<true | NotFoundError> {
        try {
            await fs.access(pathImage, fs.constants.F_OK);
        } catch {
            throw new NotFoundError('Image not found');
        }

        return true;
    }
}