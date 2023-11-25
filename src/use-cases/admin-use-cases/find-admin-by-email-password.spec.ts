import InMemoryAdminRepository from '../../../tests/im-memory/repositories/in-memory-admin-repository';
import FindAdminByEmailAndPassword from './find-admin-by-email-password';
import {describe, it, expect} from 'vitest';

describe('Find Admin by  and password', ()=> {
    it('should be able to find a admin by email e password', async()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        const admin = await findAdminByEmailAndPassword.execute('johndoe@email.com','senha123' );
        expect(admin).toEqual(admin);
    });

    it('should not be able to find a admin with incorrect password', async ()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        await expect(findAdminByEmailAndPassword.execute('johndoe@email.com', 'password-fake')).rejects.toThrowError('Incorrect password');
        
    });
    it('should not be able to find a admin with incorrect email', async()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        await expect(findAdminByEmailAndPassword.execute('fake@email.com', 'senha123')).rejects.toThrowError('Incorrect email');
    });
    
});