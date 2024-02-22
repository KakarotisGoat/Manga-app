import './App.css';
import React from 'react';

const Manga = () =>{
    return(
        <section className='manga-section'>
            <img className="manga-section-images" src="Vagabond.jpg" alt="Vagabond-vol-1" />
            <img className="manga-section-images" src="Berserk.webp" alt="Berserk-vol-1" />
            <img className="manga-section-images" src="Demon_Slayer.jpg" alt="Demon_Slayer-vol-1" />
            <img className="manga-section-images" src="Chainsaw_man.webp" alt="Chainsaw_man-vol-1" />
            <img className="manga-section-images" src="Breaker.jpg" alt="Breaker-vol-1" />
            <img className="manga-section-images" src="JJK.jpg" alt="Jujutsu_Kaisen-vol-1" />
            <img className="manga-section-images" src="OPM.jpg" alt="One_Punch_Man-vol-1" />
            <img className="manga-section-images" src="ROR.webp" alt="Record_Of_Ragnarok-vol-1" />  
            <img className="manga-section-images" src="MHA.jpg" alt="My_Hero_Academia-vol-1" />
        </section>
    );
};

export default Manga;