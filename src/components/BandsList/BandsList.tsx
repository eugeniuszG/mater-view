import { useState, useEffect } from 'react'
import store from '../../Store'
import { BandCard } from '../BandCard/BandCard'
import { BandData } from '../../types'

export const BandsList = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [bands, setBands] = useState<BandData[]>([])

  useEffect(() => {
    setBands(store.findAll('bands'))
  }, [])

  return (
    <div>
      <h2>Bands</h2>
      <div
        style={{  
          display: 'flex',
          flexWrap: 'wrap'
      }}>
        {bands.map(band => 
              <div
                key={band.id}>
                <BandCard
                  key={band.id}
                  id={band.id}
                  description={band.description}
                  image={band.image}
                  name={band.name}
                  isSelected={band.id === selectedCard}
                  onClick={() => setSelectedCard(band.id)}
                ></BandCard>
              </div>
        )}
      </div>
    </div>
  )
}

export default BandsList