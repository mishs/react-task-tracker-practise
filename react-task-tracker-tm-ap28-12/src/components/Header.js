import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

// line 4 ({ title }) is equal to (props) then destructing on line 7 as {props.title}
const Header = ({ title }) => {
    const clickedBtn = () => {
        console.log('clicked 3rd')
    }

    return (
        // style={headerStyling}
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' color='red' clickProp={clickedBtn} />
            {/* <Button text='Add2' color='blue' />
            <Button text='Add1' color='green' /> */}
        </header>
    )
}

Header.propTypes = {
    title: propTypes.string
}

Header.defaultProps = {
    title: 'Chris'
}

//CSS in JS
// const headerStyling = {
//     backgroundColor: 'red'
//   }
  

export default Header
