import { describe, expect, it } from 'vitest';
import FindImage from './find-image';
import {resolve} from 'path';

describe('Find Image', () => {
    it('should return false when not finding an image by path', async ()=> {
        const findImage = new FindImage();
        const pathImage = resolve(__dirname, '..', '..', '..', 'tmp', 'images', 'zvbcgvc2.jpg');
        
        await expect(findImage.execute(pathImage)).rejects.toThrowError();
    });
    it('should return true when not finding an image by path', async ()=> {
        const findImage = new FindImage();
        
        const pathImage = resolve(__dirname, '..', '..', '..', 'tmp', 'images', 'bhcbzhcvavc382y2.jpg');

        const existImage = await findImage.execute(pathImage);
        expect(existImage).toBeTruthy();
    });
});