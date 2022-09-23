import React from 'react';
import {Link} from 'react-router-dom';



function Header(props) {
    return (
		<>
    {/* Navbar */}
    
    <div id="header">
        <div className="inner">
            <h1><Link to ='/' className='text-link'>PetShop</Link></h1>
            <ul>
                <li><Link to ='/upload/2' className='text-link'>상품등록하기</Link></li>
                <li><Link to ='/product2/3' className='text-link'>상품보기</Link></li>
                <li><Link to ='/comunity/4' className='text-link'>커뮤니티</Link></li>
                <li><Link to ='/cart/5' className='text-link'>장바구니</Link></li>
                <li><Link to="/login" className='text-link'>login</Link></li>
                <li><Link to='/logout' className='text-link'>logout</Link></li>
                <li><Link to="/signup" className='text-link' >회원가입</Link></li>
            </ul>
        </div>
    </div>   
    
      
        
    
    </>
    );
}

export default Header;
