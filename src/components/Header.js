import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title,onAdd,showAdd }) => {

    return (
        <header className="flex justify-between items-center mb-2 w-full">
            <div className="mx-auto px-4 sm:px-6 w-full mb-2">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#" className="font-bold text-xl">
                            <span>{title}</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
                    </div>
                </div>
            </div>
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
