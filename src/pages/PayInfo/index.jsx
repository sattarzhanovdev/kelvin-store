import React from 'react'
import c from './PayInfo.module.scss'
import { GetPolicy, ScrollTop } from '../../helpers'

const PayInfo = () => {
  const {data} = GetPolicy()
  const text3 = data?.map(item => item.agreement3.split('\r\n'))
  React.useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div className={c.pay}>
      <div className={c.title}>
        <h2>ДОСТАВКА & ОПЛАТА</h2>
      </div>
      <div className={c.text}>
        <ul>
          {
            text3?.flat(1).map((item, i) => (
              <span key={i}>
                {
                  <p>{item}</p> 
                }
                {
                  item.length === 0 ? <br/>
                  : ''
                }
              </span>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default PayInfo
