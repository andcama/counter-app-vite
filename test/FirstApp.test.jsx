import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp</>', () => { 

  /*   test('Debe macer match con el snapshot', () => { 
        const title ='Hola ,Soy Goku';
      const {container} = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();
     }); */

     test('Debe de mostrar el titulo con H1', () => { 
        const title ='Hola ,Soy Goku';
      const {container,getByText,getByTestId} = render(<FirstApp title={title}/>)
        expect( getByText(title) ).toBeTruthy();

       /*  const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title) */

expect(getByTestId('test-title').innerHTML).toBe(title)

     });

     test('Debe de mostrar el subtitulo enviado por Props', () => { 
        const title ='Hola ,Soy Goku';
        const subTitle ='Hola ,soy un subtitulo';

      const {getAllByText}= render(
        <FirstApp
        title={title}
        subTitle={subTitle}/>
      );

expect(getAllByText(subTitle).length).toBe(1);

     });


    
 });