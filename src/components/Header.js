import PropTypes from 'prop-types'; 
import Button from './Button'
//propType library ensures props type are appropriate and catches errors early on


const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }   

    return (
      //classname here refers to the CSS style sheet, meangin create this header in the style prewritten in the CSS file
      <header className = 'header'> 
          <h1>{title}</h1>
          <Button text='Hey' bgColor='green' onClick = {onClick}/>
      </header>
    )
};

Header.defaultProps = {
    title: "Task Tracker",
    //this sets default title of Header if title is not passed in
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
    //basically this line means Header must have a title prop (isRequired), and it must be a string (string)
}

/////// optional way to change style of a heading (CSS in JS)
// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
//////  simple need to put <h1 style = {HeadingStyle}>{title}</h1>


export default Header;
