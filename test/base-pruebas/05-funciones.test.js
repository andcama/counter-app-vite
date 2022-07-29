import { getUser,getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('first', () => { 
    
    test('getUser debe de retornar un objecto', () => { 

        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUser).toEqual(user);
     })

     test('getUsuarioActivo debe de retornar un objecto', () => { 

const name='Andres'
        const user = getUsuarioActivo(name);
        expect(user).toStrictEqual({
            uid:'ABC567',
            username:name
        });
     })
 })