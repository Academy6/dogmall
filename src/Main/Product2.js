import React, { useEffect } from 'react';
import { dbService } from '../fbase';


const Product2 = () => {
    const Test = ()=> {
        dbService.collection('goodsInfo').onSnapshot(snapshot=> {
            const goodsInfoArray = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(goodsInfoArray)
        })
    }
    return (
        <div>
            <button onClick={Test}>test</button>
            상품보기 페이지
        </div>
    );    
}

export default Product2;
