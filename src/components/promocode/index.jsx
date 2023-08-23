import React from 'react'
import { BsPercent } from 'react-icons/bs'
import c from './promocode.module.scss'
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi'
import { GetPromocodes } from '../../helpers'
import { useForm } from 'react-hook-form'

const Promocode = () => {
  const [ active, setActive ] = React.useState(false)
  const [ code, setCode ] = React.useState('')
  const [ success, setSuccess ] = React.useState('')
  const [ error, setError ] = React.useState('')

  const { promocodes } = GetPromocodes()

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const getDiscount = () => {
    const dis = promocodes?.find(item => item.code === code)
    const discount = dis?.discount?.slice(0, dis.discount.length - 3)

    if(code.length === 6) {
      if(dis && dis?.is_active) {
        localStorage.setItem('discount', discount)
        setCode('')
        setError('')
        setSuccess('Промокод успешно применен')
      }else if(dis?.is_active !== true){
        setError('Такого промокода мы не знаем')
        localStorage.setItem('discount', 0)
      }else{
        setError('Такого промокода мы не знаем')
        localStorage.setItem('discount', 0)
      }
    }else{
      setError('Заполните поле')
    }
    reset()
  }  

  return (
    <div className={c.promocode}>
      <div
        onClick={() => {
          setError('')
          setActive(!active)
        }}
      >
        <div className={c.left}>
          <li>
            <BsPercent />
          </li>
          <h3>Ввести промокод</h3>
        </div>
        <div className={c.right}>
          <span>
            {active ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
          </span>
        </div>
      </div>
      <form 
        className={active ? c.active : c.disactive}
      >
        <input 
          type="text"
          placeholder='Промокод'
          maxLength={6}
          className={code.length >= 1 ? c.active : ''}
          onChange={e => setCode(e.target.value)}
        />
        {error.length >= 1 ? <p>{error}</p> : null}
        <button 
          className={success.length >= 1 ? c.success : ''}
          onClick={e => {
            e.preventDefault()
            getDiscount()
          }}
          disabled={success.length >= 1 ? true : false}
        >
          {success.length >= 1 ? 'Промокод успешно применен' : 'Применить'}
        </button>
      </form>  
    </div>
  )
}

export default Promocode