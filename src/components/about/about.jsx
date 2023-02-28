import React from 'react'
import './about.css'
import ME from '../../assets/bean bag chair chill.png'
import {SiApplemusic} from 'react-icons/si'
import {GiBasketballBasket} from 'react-icons/gi'
import {GiRetroController} from 'react-icons/gi'
const about = () => {
  return (
    <section id='about'>
        <h2>Mes centres d'intêrets</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About Image' />
            </div>
          </div>
          
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <SiApplemusic className='about__icon'/>              
                <h5>Musique</h5>
                <small>- 10 ans de piano en conservatoire<br/>- 2eme année de basse en conservatoire<br/>- Batterie autodidacte</small>
              </article>
              <article className='about__card'>
                <GiRetroController className='about__icon'/>              
                <h5>Mangas et Anime</h5>
                <small>Regardé plus de 20 anime, depuis mes 16ans <br/>exemple : <br/>- Naruto<br/>- One Piece<br/>- HunterxHunter<br/>- Fullmetal Alchimist</small>
              </article>
              <article className='about__card'>
                <GiRetroController className='about__icon'/>              
                <h5>Jeux Vidéos</h5>
                <small>- Valorant<br/>- Fortnite <br/>- fifa<br/>- Nba2k<br/>- SSBU<br/>- Mario Kart</small>
                
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default about