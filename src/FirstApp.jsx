import PropTypes from 'prop-types';

export const FirstApp = ({title,subTitle,name}) => {
//console.log(title);

  return (
    <>
      <div data-testid="test-title">{title}</div>
      {/* <code>{JSON.stringify(newMessage) } </code> */}
      <p>{subTitle }</p>
      <p>{name }</p>
    </>
  );
};

FirstApp.propTypes = {
title:PropTypes.string.isRequired,
subTitle:PropTypes.string,

}
FirstApp.defaultProps={
  
  subTitle:'No hay subtitulo',
  name:'Andres Camacho'
}
