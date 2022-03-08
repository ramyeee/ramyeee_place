import React from 'react';
import backgroundImage from '../../img/paper_texture.jpg';
import IDPic from '../../img/대표사진.jpg';
import PhotoDeco from '../../img/MainPage/photo_deco.png';
import ApplicationTitle from '../../img/MainPage/applicationform.png';
import '../css/MainPage.css';

const MainpageTemplate = () => {
    return (
        <div>
            <div>
                <img className = "background-paper" src={backgroundImage}></img>
                <img className = "title" src = {ApplicationTitle}></img>    
            </div>
            <div>               
                <img className = "ID-pic" src={IDPic} width="300px"></img>
                <img className = "ID-deco" src = {PhotoDeco}></img>
            </div>
        </div>
    )
}

export default MainpageTemplate;