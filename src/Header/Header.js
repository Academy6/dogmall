import React from 'react';
import {Link} from 'react-router-dom';



function Header(props) {
    return (
		<>
    {/* Navbar */}
    
    <div id="header">
            <div className="inner">
                <h1><Link to ='/'>PetShop</Link></h1>
                <ul>
                    <li><Link to ='/upload/2'>상품등록하기</Link></li>
                    <li><Link to ='/product2/3'>상품보기</Link></li>
                    <li><Link to ='/comunity/4'>커뮤니티</Link></li>
                    <li><Link to ='/cart/5'>장바구니</Link></li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li>
                        <div>
                            <h1>메인입니다.</h1>
                        </div>
                        
                        <Link to="/login" className='text-link'>login</Link>
                        <Link to='/logout' className='text-link'>logout</Link>
                        <Link to="/signup" className='text-link' >회원가입</Link>
                        <Link to="/conversation" className='text-link'>리뷰</Link>
                    </li>
                </ul>
            </nav>
        </div>   
    
      
        
    
    </>
    );
}

export default Header;
