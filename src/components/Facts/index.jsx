import React from 'react'
import c from './Facts.module.scss'
import FactsCard from '../FactsCard'
import FactsCard3 from '../FactsCard3'
import FactsCard2 from '../FactsCard2'

const Facts = () => {
  
  
  return (
    <div className={c.facts}>
      <div className={c.container}>
        <FactsCard/>
        <FactsCard2/>
        <FactsCard3/>
      </div>
    </div>
  )
}

export default Facts
