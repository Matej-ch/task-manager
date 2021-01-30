import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title,onAdd,showAdd }) => {

    return (
        <header className="flex justify-between items-center mb-1">
            <h1>
                {title}
            </h1>
            <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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