import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h2>Mes expériences professionelles</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Stage 1</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>Css/Boostrap</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>PHP</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>ChurchCRM</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>Mysql</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill/>
              <h4>Putty</h4>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Stage 2</h3>
          <div className='experience__content'>
            <article>
            <BsPatchCheckFill/>
              <h4>PHP</h4>
            </article>
            <article>
            <BsPatchCheckFill/>
              <h4>Magento2</h4>
            </article>
            <article>
            <BsPatchCheckFill/>
              <h4>Mysql</h4>
            </article>
            <article>
            <BsPatchCheckFill/>
              <h4>Elasticsearch</h4>
            </article>
            <article>
            <BsPatchCheckFill/>
              <h4>Putty</h4>
            </article>
          </div>


        </div>
      </div>

    </section>
  )
}

export default experience