import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {

    const onClick = (e) => {

    }

    return (
        <header className="flex justify-between items-center mb-1">
            <h1>
                {title}
            </h1>
            <Button text="Add" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task manager'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;