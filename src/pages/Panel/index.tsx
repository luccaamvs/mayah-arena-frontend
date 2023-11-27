import userImage from '../../assets/images/user_profile/userImage.png';
import albertImage from '../../assets/images/character_profile/albertImage.png';
import allithImage from '../../assets/images/character_profile/allithImage.png';
import aradiaImage from '../../assets/images/character_profile/aradiaImage.png';

import { Navbar } from '../../components/Navbar';
import { Character } from '../../components/Character';
import { Paginator } from '../../components/Paginator';

import './styles.css';

export function Panel() {
    return (
        <div className='container-main'>

            <Navbar />

            <div className='panel'>

                <div className='left-side'>

                    <div className='characters-filter'>
                        <div><input placeholder='SEARCH CHARACTER...'></input></div>
                        <Paginator />
                    </div>

                    <div className='characters-choose'>
                        <div className='characters-choose-line'>
                            <Character /> 
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                        </div>
                        <div className='characters-choose-line'>
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                        </div>
                        <div className='characters-choose-line'>
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                            <img src={albertImage} alt="Albert" className="character" />
                        </div>
                    </div>
                </div>

                <div className='right-side'>
                    <div className="user-selected-area">
                        <div className="character-selected">
                            <div >
                                <img src={userImage} alt="User" className="user-selected-icon" />
                            </div>

                            <div className="profile-desc">
                                <div className="profile-structure">
                                    <span className='profile-desc-title'>luccabordin</span>
                                    <span className='profile-desc-title'>cherubim</span>
                                    <div className='profile-linha'><span className='profile-desc-title'>clan: </span> lbr</div>
                                    <div className='profile-linha'><span className='profile-desc-title'>level:</span>  36 34015xp</div>
                                    <div className='profile-linha'><span className='profile-desc-title'>ladderrank:</span> 52 </div>
                                    <div className='profile-linha'><span className='profile-desc-title'>ratio:</span> 128 : 76 - +1</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="character-selected-area">
                        <div className="character-selected">
                            <div >
                                <img src={albertImage} alt="Albert" className="character-selected-icon" />
                            </div>
                            <div>
                                <img src={allithImage} alt="Allith" className="character-selected-icon" />
                            </div>
                            <div>
                                <img src={aradiaImage} alt="Aradia" className="character-selected-icon" />
                            </div>
                        </div>
                        <div>
                            <p className="character-selected-desc">Select 3 characters into your team</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}