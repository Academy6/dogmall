import React, { useEffect, useState } from 'react';
import { dbService } from '../fbase';
import '../scss/upload.scss'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons'
import { Card, Col, Button, Row } from 'antd';

const Product2 = ({userObj}) => {
    const [goodsArray, setGoodsArray] = useState([])
    const [goCart, setGoCart] = useState(false)
    const { Meta } = Card;
    useEffect(()=> {
        dbService.collection('goodsInfo').onSnapshot(snapshot=> {
            const goodsInfoArray = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setGoodsArray(goodsInfoArray)
        })
    }, [])//useEffect 의존성배열, 디팬던시
    const onClick = async(data)=> {
        // 내가 넣을 값인지 찍어봐요. 그 값의 타입이 내가 넣으려는 탑인지 확인해ㅑ요
        const img = data.fileUrl
        dbService.collection("Cart").add({
            text: data.text.price,
            user: userObj.email,
            name: data.text.name,
            createdAt: Date.now(),
            img
        })
        setGoCart(true)
    }
    const cancelGoCart = ()=> {
        setGoCart(false)
    }
    return (
        <div>
            <div>
                <div>
                    <p>상품보기 페이지</p>
                    <Row className='test'>
                        {goodsArray.sort((a,b)=> a.createdAt - b.createdAt).map((data,index)=> (
                            <div className='card-div' key={index}>
                                {/* <ul>
                                    <li><img src={data.fileUrl} width={50} height={50} /></li>
                                    <li>{data.text.seller}님</li>
                                    <li>{data.text.name}</li>
                                    <li>{data.text.price}원</li>
                                    <li>{data.text.description}</li>
                                    <li><button onClick={onClick.bind(null, data)}>장바구니</button></li>
                                </ul> */}
                                <Col>
                                    <Card hoverable className='card' cover={<img alt="example" src={data.fileUrl} />} >
                                        <Meta title={data.text.name} />
                                        <Meta title={data.text.seller} />
                                        <Meta title={data.text.price} />
                                        <Meta title={data.text.description} />
                                        <Button className='plus-btn' block onClick={onClick.bind(null, data)}>바구니추가하기</Button>
                                    </Card>
                                </Col>
                             </div>
                        ))}
                    </Row>
                </div>
                <div>
                    {goCart ? <div className='go-cart'><p>상품보러 <NavLink to ='/cart/5' className='text-link normal-text'>장바구니</NavLink>로 이동하기</p>
                    <p onClick={cancelGoCart}><CloseOutlined /></p></div> : ''}
                </div>
                <div style={{height: 50}}>
                </div>
            </div>
        </div>
    );    
}

export default Product2;

const StyledAllwaysScrollSection = styled.div`
    overflow: scroll;
    width: 100%;
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
    }
`