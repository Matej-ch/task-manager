import PropTypes from 'prop-types'

const Button = ({text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex-shrink-0 bg-green-600 text-white text-base font-semibold py-2 px-4 rounded-sm shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200 active:bg-green-700 ">{text}</button>
    )
}


Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;