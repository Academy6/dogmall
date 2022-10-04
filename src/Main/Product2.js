import React, { useEffect, useState } from 'react';
import { dbService } from '../fbase';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';


const Product2 = () => {
    const [goodsArray, setGoodsArray] = useState([])
    const location = useLocation()
    useEffect(()=> {
        dbService.collection('goodsInfo').onSnapshot(snapshot=> {
            const goodsInfoArray = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setGoodsArray(goodsInfoArray)
        })
    }, [])
    const Test = ()=> {
        console.log(goodsArray)
        // console.log(window.location.href)
        let qs = queryString.parse(window.location.href)
        console.log(qs)
    }
    // const Test = ()=> {
    //     const [goodsInfo, setGoodsInfo] = useState("")
    //     dbService.collection('goodsInfo').onSnapshot(snapshot=> {
    //         const goodsInfoArray = snapshot.docs.map((doc)=> ({
    //             id: doc.id,
    //             ...doc.data()
    //         }))
    //         goodsInfoArray.map((num)=> {
                
    //         })
    //     })
    // }
    return (
        <div>
            <button onClick={Test}>test</button>
            <div>
                <p>상품보기 페이지</p>
                {goodsArray.map((data,index)=> (
                    <div key={index}>{data.text.price}</div>
                ))}
            </div>
        </div>
    );    
}

export default Product2;
