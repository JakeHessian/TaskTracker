import PropTypes from 'prop-types';

const Button = ({ background_color,
    text_color, text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                style={{
                    backgroundColor: background_color,
                color: text_color}}
                className="btn">
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    background_color: PropTypes.string,
    text_color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button

