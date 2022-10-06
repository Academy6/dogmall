import { dbService } from '../fbase';
import React, { useEffect, useState } from 'react';

const Cart = ({userObj})=> {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(1)
  const [same, setSame] = useState(false)
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
      <div>
        {cart.sort((a,b)=> a.createdAt - b.createdAt).map((data, index)=> (
          <div key={index}>
              <ul>
                <li><img src={data.img} width={50} height={50}/></li>
                {same ? <li>true</li> : <li>false</li>}
                <li>{data.text}원 {count}개</li>
                <button onClick={onClick.bind(null, data)}>취소</button>
              </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;