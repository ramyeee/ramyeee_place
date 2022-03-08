import React from 'react';
import {useEffect, useState} from 'react';
import woodMaterial from '../../img/wood_texture.jpg';
import deco01 from '../../img/MainPage/deco/deco01.png';
import deco02 from '../../img/MainPage/deco/deco02.png';

import MainImage from '../../img/MainPage/main.png'
import '../css/MainPage.css';


const deco = [deco01, deco02];

const MainpageTemplate = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(prevIndex => (index == 1 ? 0 : prevIndex + 1));
        }, 500);
        return () => {
            /* cleanup */
            clearInterval(timeout);
        };
    /* on component render*/
    }, [index]);

    return (
        <div>
            <img id = "desk" src = {woodMaterial}></img>
            <img id = "background" src={MainImage}></img>
            <img id = "deco" src = {deco[index]} />
        </div>
    )
}

export default MainpageTemplate;