import React from 'react'
import c from './Confidentiality.module.scss'
import { GetPolicy, ScrollTop } from '../../helpers'

const Confidentiality = () => {
  const {data} = GetPolicy()
  const text2 = data?.map(item => item.agreement2.split('\r\n'))
  React.useEffect(() => {
    ScrollTop()
  }, [])

  const check = (str) => /^[0-9]+$/.test(str)

  // console.log(check(text2[0][1].charAt(0)));
  return (
    <div className={c.confidentiality}>
      <div className={c.title}>
        <h2>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h2>
      </div>
      <div className={c.text}>
        <ul>
          {
            text2?.flat(1).map((item, i) => (
              <span key={i}>
                { 
                  check(item.charAt(0)) === true ? <p>{item}</p> 
                  : i === 0 ? <p>{item}</p> 
                  :item.length === 0 ? <br/>
                  : <li>{item}</li> 
                }
              </span>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Confidentiality
