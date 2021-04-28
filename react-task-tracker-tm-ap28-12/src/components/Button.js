import propTypes from 'prop-types'

const Button = ({color , text }) => {
    return (
        <button style={{ backgroundColor: color }}
            className='btn'>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string
}

Button.defaultProps = {
    color: 'blue'
}

export default Button
