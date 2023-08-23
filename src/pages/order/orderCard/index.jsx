import React from 'react'
import c from './cartCard.module.scss'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const OrderCard = ({id, image, title, size, price, count, obj}) => {
    const [ active, setActive ] = React.useState(false)
    const [ activeCart, setActiveCart ] = React.useState(false)
    const [ dep, setDep ] = React.useState('')

    const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
    const check = cart?.find(item => item?.id === obj?.id)
    const index = cart?.findIndex(obj => obj.id === id);

    React.useEffect(() => {
        setTimeout(() => {
        const check = cart?.find(item => item?.id === obj?.id)
        check ? setActive(true) : setActive(false)
        setDep(Math.random())
        }, 100)
    }, [dep])

    const increment = () => {
        !check ? cart?.push({...obj, count: 1}) : cart[index].count = cart[index].count + 1;
        localStorage.setItem('kelvin_cart', JSON.stringify(cart))
    }  

    const decrement = () => {
        !check ? cart?.push({...obj, count: 1}) : cart[index].count = cart[index].count - 1;
        localStorage.setItem('kelvin_cart', JSON.stringify(cart))
    }  

    const deleteItem = () => {
        const index = cart?.findIndex(item => item.id === obj.id);
        if (index !== -1) {
          cart?.splice(index, 1);
        }
        localStorage.setItem('kelvin_cart', JSON.stringify(cart));
    }
      
    const navigate = useNavigate()


  return (
    <div className={c.card}>
        
        <div className={c.main}>
            <div className={c.left}>
                <img 
                    src={
                        image ? 
                        image : 
                        'https://yt3.ggpht.com/a/AATXAJx-k8pMwgN2y_GuIhcHXN0gUEAPSXQJM3AuzR-n=s900-c-k-c0xffffffff-no-rj-mo'
                    }
                    alt="image"
                    onClick={() => navigate(`/more/${id}`)}
                />
            </div>
            <div className={c.right}>
                <div className={c.up}>
                    <h3>
                        {
                            title.length > 56 ? 
                            `${title.slice(0, 56)}...` : 
                            title
                        }
                    </h3>
                    <p>
                        <span>Размер: </span> {size}
                    </p>
                </div>
                <div className={c.down}>
                    <h3>
                    {
                        price.slice(0, price.length - 3 ).length === 4 ? 
                        `${price.slice(0, 1)} ${price.slice(1, price.length - 3 )}` 
                        : price.slice(0, price.length - 3 ).length === 5 ?
                        `${price.slice(0, 2)} ${price.slice(2, price.length - 3 )}` 
                        : price.slice(0, price.length - 3 ).length === 6 ?
                        `${price.slice(0, 3)} ${price.slice(3, price.length - 3 )}` : 
                        price.slice(0, price.length - 3 )
                    }
                     ₽</h3>
                    <div className={c.floor}>
                        <div className={c.count}>
                            <button
                                disabled={count <= 1 ? true : false }
                                className={count <= 1 ? c.disabled : '' }
                                onClick={() => decrement()}
                            >
                                <BiMinus />
                            </button>
                            <span>{count}</span>
                            <button
                                onClick={() => increment()}
                            >
                                <BiPlus />
                            </button>
                            
                        </div>
                        <p
                            onClick={() => deleteItem()}
                        >
                            Удалить
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={c.floor}>
            <div className={c.count}>
                <button
                    disabled={count <= 1 ? true : false }
                    className={count <= 1 ? c.disabled : '' }
                    onClick={() => decrement()}
                >
                    <BiMinus />
                </button>
                <span>{count}</span>
                <button
                    onClick={() => increment()}
                >
                    <BiPlus />
                </button>
                
            </div>
            <p
                onClick={() => deleteItem()}
            >
                Удалить
            </p>
        </div>
    </div>
  )
}

export default OrderCard