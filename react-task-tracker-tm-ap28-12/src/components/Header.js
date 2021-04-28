import React from 'react'
import propTypes from 'prop-types'

// line 4 ({ title }) is equal to (props) then destructing on line 7 as {props.title}
const Header = ({ title }) => {
    return (
        // style={headerStyling}
        // <div style={{ backgroundColor: 'blue'}}>
            <h1>{title}</h1>
        </div>
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
