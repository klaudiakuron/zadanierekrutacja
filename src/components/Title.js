import '../css/Title.css';

const Title = ({ title }) => {
    return (
        <div className="title__container">
            <p className="title__label">{title}</p>
            <div className="title__line"></div>
        </div>
    )
}

export default Title;