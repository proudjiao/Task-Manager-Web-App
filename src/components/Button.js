import PropTypes from 'prop-types'; 

const Button = ({text, bgColor, onClick}) => {
  return (
  <button 
    className = 'btn' 
    style = {{backgroundColor: bgColor}}
    onClick = {onClick}>
    {text}
  </button>);
};

Button.defaultProps = {
    text: "Press Me!",
    bgColor: "black",
}

Button.propTypes ={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
}



export default Button;
