import React from 'react';

const Home = () => {
    return (
        <section className='full-page-grid'>
            <section className="featured-manga">
                <img className="center-image" src="src/Components/Solo_leveling.jpg" alt="Featured Manga" />
                <div className='content'>
                    <h1 className='title-image'>Solo Leveling</h1>
                    <p>Known as the the Weakest Hunter of All Mankind, E-rank hunter Jinwoo Sung’s contribution to raids amounts to trying not to get killed. Unfortunately, between his mother’s hospital bills, his sister’s tuition, and his own lack of job prospects, he has no choice but to continue to put his life on the line. So when an opportunity arises for a bigger payout, he takes it…only to come face-to-face with a being whose power outranks anything he’s ever seen! With the party leader missing an arm and the only healer a quivering mess, can Jinwoo some­how find them a way out?</p>
                    <h4>Genre</h4>
                    <p>Action  , Adventure , Fantasy , Shounen</p>
                    <h4>Writer</h4>
                    <p>Sung-Lak Jang</p>
                </div>
            </section>
            <h1 className='other'>Other Volumes</h1>
            <section className='featured-manga-volumes'>
            <img className="center-image" src="src/Components/Solo_leveling-vol2.jpg" alt="Volume 2" />
            <img className="center-image" src="src/Components/Solo_leveling-vol3.jpg" alt="Volume 3" />
            <img className="center-image" src="src/Components/Solo_leveling-vol4.jpg" alt="Volume 4" />
            <img className="center-image" src="src/Components/Solo_leveling-vol5.jpg" alt="Volume 5" />
            <img className="center-image" src="src/Components/Solo_leveling-vol6.jpg" alt="Volume 6" />
            <img className="center-image" src="src/Components/Solo_leveling-vol7.jpg" alt="Volume 7" />
            </section>
        </section>
    );
};

export default Home;
