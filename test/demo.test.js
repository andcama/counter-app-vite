describe('Pruebas en <DemoComponent/>', () => { 


    test('Esta prueba no debe de fallar',()=>{
        //Inicailizacion
     const message1='Hola Mundo';
     
        ///Estimulo
     const message2=message1.trim();
        //Observar comportasmiento
        expect(message1).toBe(message2);
     })




 })

