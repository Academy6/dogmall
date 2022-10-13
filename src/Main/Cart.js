import { dbService } from '../fbase';
import React, { useEffect, useState } from 'react';
import '../scss/upload.scss'

const Cart = ({userObj})=> {
  const [cart, setCart] = useState([])
  useEffect(()=> {
    dbService.collection("Cart").onSnapshot(snapshot=> {
      const cartArray = snapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data()
      }))
      const resultArray = cartArray.filter((data)=> {
        if (data.user === userObj.email) {
          return(data.user === userObj.email)
        }
      })
      setCart(resultArray)
    })
  }, [])
  const onClick = async(data)=> {
    const ok = window.confirm(`정말로 삭제하시겠습니까?`)
        if (ok) {
          await dbService.doc(`Cart/${data.id}`).delete()
        }
  }
  return(
    <div>
      <div className='cart'>
        {cart.sort((a,b)=> a.createdAt - b.createdAt).map((data, index)=> (
          <div key={index}>
              <div className='cart-start'>
                <div className='cart-center'>
                  <div><img src={data.img} width={50} height={50}/></div>
                  <div className='cart-center-info'>
                    <div className='cart-info'>
                      <p>상품명:</p>
                      <p>{data.name}</p>
                    </div>
                    <div className='cart-info'>
                      <p>가격:</p>
                      <p>{data.text}원</p>
                    </div>
                  </div>
                </div>
                <div className='cart-end'><button onClick={onClick.bind(null, data)}>취소</button></div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;