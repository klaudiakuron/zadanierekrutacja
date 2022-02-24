import '../css/Button.css';

const Button = ({ caption }) => {
    return (
        <div className="button__container">
            <button type="submit" className="button__caption">{caption}</button>
        </div>
    )
}

export default Button;