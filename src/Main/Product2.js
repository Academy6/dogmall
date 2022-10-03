import React from 'react';
import { dbService } from '../fbase';


const Product2 = ({userObj}) => {
    const Test = ()=> {
        const data = userObj
        const test = dbService.collection('goodsInfo').onSnapshot(snapshot=> {
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
        </div>
    );
}

export default Product2;
