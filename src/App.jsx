import { useState } from 'react'
import { bg1, bg2, bg3, bg4 } from './assets/images/'
import phrases from './phrases.json'
import './App.css'

const images = [bg1, bg2, bg3, bg4]

function radomIndex (max) {
  return Math.floor(Math.random() * max)
}

function App () {
  const [phrase, setPhrase] = useState(phrases[radomIndex(phrases.length)])
  const [img, setImg] = useState(images[radomIndex(images.length)])

  function changePhrase () {
    setPhrase(phrases[radomIndex(phrases.length)])
    setImg(images[radomIndex(images.length)])
  }

  return (
    <div className='wrapper' style={{ backgroundImage: `url('${img}')` }}>
      <div className='container'>
        {/* Encabezado */}
        <h1 className='heading'>Galletas de la <br /> Fortuna</h1>
        {/* Contenido */}
        <div className='card'>
          <div className="card__body">
            <q className='phrase'>{phrase.phrase}</q>
            <cite className='author'>- <b>{phrase.author}</b></cite>
          </div>
        </div>
        {/* Botón */}
        <button onClick={changePhrase} className='btn'>Ver otro</button>
      </div>
    </div>
  )
}

export default App
