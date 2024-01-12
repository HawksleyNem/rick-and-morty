import React, { useEffect, useState } from 'react'
import '../single/single.scss'
import { URL } from '../../constants/api'
import { useParams } from 'react-router-dom'
import Episode from '../../components/episode'

export default function Single() {

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  const fetchApi = async () => {
    try {
      const response = await fetch(`${URL}/${id}`)
      const results = await response.json()
      setCharacter(results);
    }
    catch (e) {
      console.log(e.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
      <div className='detail-page'>
        <div className="detail__img">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="detail__body">
          <h2>{character.name}</h2>
          <p>{character.location.name}</p>
        </div>
        <Episode links={character.episode}/>
      </div>
  )
}