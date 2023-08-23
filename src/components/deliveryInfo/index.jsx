import React from 'react'
import c from './deliveryInfo.module.scss'
import { IMaskInput } from 'react-imask';


const DeliveryInfo = ({active2, setActive2}) => {
  const [cityName, setCityName] = React.useState('')
  const [streetName, setStreetName] = React.useState('')
  const [streetResult, setStreetResult] = React.useState(null)
  const [ activeResStreet, setActiveResStreet ] = React.useState(false)

  const [ active, setActive ] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
  })
  
  
  const PhoneMask = "+{7} (000) 000-00-00";
  const phoneMask = [
    {
      mask: PhoneMask,
    }
  ];
  return (
    <div className={c.deliveryInfo}>
      <h3>Ваши данные для доставки</h3>
      <form>
        <div>
          <input 
            type="text"s
            className={active2.first ? c.active : null}
            onChange={e => {
              setActive2({
                ...active==false,
                first: true
              })
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  first: true
                })
              }else{
                setActive({
                  ...active,
                  first: false
                })
              }
            }}
          />
          <span className={active.first ? c.active : null}>Имя *</span>
        </div>
        <div>
          <input 
            type="text" 
            className={active2.second ? c.active : null}
            onChange={e => {
              setActive2({
                ...active==false,
                second: true
              })
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  second: true
                })
              }else{
                setActive({
                  ...active,
                  second: false
                })
        
              }
            }}
          />
          <span className={active.second ? c.active : null}>Фамилия *</span>
        </div>
        <div>
          <input 
            type="email" 
            className={active2.third ? c.active : null}
            onChange={e => {
              setActive2({
                ...active==false,
                third: true
              })
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  third: true
                })
              }else{
                setActive({
                  ...active,
                  third: false
                })
              }
            }}
          />
          <span className={active.third ? c.active : null}>Email *</span>
        </div>
        <div>
          <IMaskInput
            className={active2.fourth ? c.active : null}
            mask={phoneMask}
            id='phoneInput'
            onChange={e => {
              setActive2({
                ...active==false,
                fourth: true
              })
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  fourth: true
                })
              }else{
                setActive({
                  ...active,
                  fourth: false
                })
              }
            }}
          />
          <span className={active.fourth ? c.active : null}>Телефон *</span>

        </div>
      </form>
      <div className={c.address}>
        <h3>Адрес доставки</h3>
        {/* <p className={c.parag}>Выберите удобное отделение почты для вас и заберите свой заказ там</p> */}
        <div className={c.inputForm}>
          <div className={c.up}>
            <div>
              <input 
                type="text"
                className={active2.fifth ? c.active : null}
                id={'suggest'}
                value={cityName}
                onChange={e => {
                  setCityName(e.target.value)
                  setActive2({
                    ...active==false,
                    fifth: true
                  })
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      fifth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      fifth: false
                    })
            
                  }

                }}
              />  
              <span className={active.fifth ? c.active : null}>Город</span>
            </div>
            <div>
              <input 
                type="text"
                className={active2.sixth ? c.active : null}
                value={streetName}
                onChange={e => {
                  setStreetName(e.target.value)
                  setActive2({
                    ...active==false,
                    sixth: true
                  })
                  if(e.target.value.length >= 1){
                    setActive({
                      ...active,
                      sixth: true
                    })
                    setActiveResStreet(true)
                  }else{
                    setActive({
                      ...active,
                      sixth: false
                    })
                    setActiveResStreet(false)
                  }
                }}
              />  
              <span className={active.sixth ? c.active : null}>Название улицы и номер дома </span>
              {
                activeResStreet ?
                  <div className={c.cityRes}>
                    {
                      streetResult?.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setStreetName(item.name)
                            setActiveResStreet(false)
                          }}
                        >
                          <p>
                            {item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}
                          </p>
                          <span></span>
                        </div>
                      ))
                    }
                  </div> :
                null
              }
            </div>
          </div>
          <div className={c.down}>
            <div>
              <input 
                type="text"
                className={active2.seventh ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  setActive2({
                    ...active==false,
                    seventh: true
                  })
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      seventh: true
                    })
                  }else{
                    setActive({
                      ...active,
                      seventh: false
                    })
                  }
                }}
              />  
              <span className={active.seventh ? c.active : null}>Дом</span>
            </div>
            <div>
              <input 
                type="text"
                className={active2.eighth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  setActive2({
                    ...active==false,
                    eighth: true
                  })
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      eighth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      eighth: false
                    })
                  }
                }}
              />  
              <span className={active.eighth ? c.active : null}>Квартира / Оффис</span>
            </div>
            <div>
              <input 
                type="text"
                className={active2.ninth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  setActive2({
                    ...active==false,
                    ninth: true
                  })
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      ninth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      ninth: false
                    })
                  }
                }}
              />  
              <span className={active.ninth ? c.active : null}>Индекс </span>
            </div>
            <div className={c.comment_div}>
              <input 
                type="text"
                id={c.comment}
                className={active2.tenth ? c.active_comment : c.comment}
                onChange={e => {
                  setActive2({
                    ...active==false,
                    tenth: true
                  })
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      tenth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      tenth: false
                    })
                  }
                }}
              />  
              <span className={active.tenth ? c.active : ''}>Комментарий к заказу </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo