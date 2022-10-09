import React, { useEffect, useState } from 'react';
import { dbService } from '../fbase';
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import styled from 'styled-components';
import bg from "./bg.jpg";
import '../scss/custom.scss'


const Main = (props) => { 
  const storage = getStorage();
  
  const [goodsArray, setGoodsArray] = useState([])  
   useEffect(()=> {
      dbService.collection('goodsInfo').onSnapshot(snapshot=> { //firebase에서 goodsinfo에대한 정보를 실시간으로 업데이트
          const goodsInfoArray = snapshot.docs.map((doc)=> ({   //기존에 가지고 있는 정보에 새로운 정보가 들어왔을떄 기존 정보는 지워지지 않고 업데이트됨
              id: doc.id,
              ...doc.data()
          }))
          setGoodsArray(goodsInfoArray) //새로 만들어진 파일을 생성
      })
  }, [])
  
	return (
      <div>
        {/* Main-bg */}
        <img id='main-bg' className="main-bg" src ={bg}></img>
        <div>
            <div>
                <div>
                    <h2>애완동물들의 쇼핑몰</h2>
                    <div><img src={bg} width={300} height={300} /></div>
                    <div><img src={bg} width={300} height={300} /></div>
                    <div><img src={bg} width={300} height={300} /></div>
                    <div><img src={bg} width={300} height={300} /></div>
                    <div><img src={bg} width={300} height={300} /></div>
                </div>
                <div>
                    <div>
                        <span style={{textAlign:'center'}}>베스트 상품</span>
                    </div>
                    {goodsArray.sort((a,b)=> a.createdAt - b.createdAt).map((data,index)=> (
                        <div className='BestGoods' key={index}>  
                            <div className={'BestGoods'+index}>
                                {index % 2 === 0 ? (
                                    <ul>
                                        <li><img src={data.fileUrl} width={300} height={300} /></li>
                                        <li>{data.text.name}</li>
                                        <li>{data.text.price}원</li>
                                    </ul>
                                ) : (
                                    <ul>
                                        <li>{data.text.name}</li>
                                        <li>{data.text.price}원</li>
                                        <li><img src={data.fileUrl} width={300} height={300} /></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
        </div>

      </div>  
	);
};

export default Main;

const StyledAllwaysScrollSection = styled.div`
    overflow: scroll;
    height: 500px;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background-color: rgb(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(0, 0, 0, 0.3);
        border-radius: 6px;
    }`