import React from 'react'
import c from './Policy.module.scss'
import { GetPolicy, ScrollTop } from '../../helpers'


const Policy = () => {
  const {data} = GetPolicy()
  
  const text1 = data?.map(item => item.agreement1.split('\r\n'))

  React.useEffect(() => {
    ScrollTop()
  }, [])
  
  if(!data) return ' '
  return (
    <div className={c.policy}>
      <div className={c.title}>
        <h2>ДОГОВОР ОФФЕРТЫ</h2>
      </div>
      <div className={c.text}>
        <div>
          {
            text1?.flat(1).map((item, i) => (
              <span key={i}>
                <p>{item}</p>
                {item.length === 0 ? <br/> : ''}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Policy
