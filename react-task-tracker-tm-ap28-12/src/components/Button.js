import propTypes from 'prop-types'

const Button = ({color , text, clickProp }) => {
    return (
        <button onClick={clickProp}
            style={{ backgroundColor: color }}
            className='btn'
            onClick={clickedBtn}
            >
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
