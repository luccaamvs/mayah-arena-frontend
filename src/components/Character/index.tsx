import './styles.css';
import albertImage from '../../assets/images/character_profile/albertImage.png';

export function Character() {
    return (
        <img src={albertImage} alt="Albert" className="character" />
    )
}