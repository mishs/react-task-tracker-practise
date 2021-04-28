import React from 'react'
import propTypes from 'prop-types'

// line 4 ({ title }) is equal to (props) then destructing on line 7 as {props.title}
const Header = ({ title }) => {
    return (
        <div>
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

export default Header