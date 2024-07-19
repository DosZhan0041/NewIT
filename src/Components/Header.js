import React from 'react'
// import logo from ''
// import fb from 
// import inst from './Assets/insta.png'
// import phone from './Assets/phone.png'

function Header() {
  return (
    <header>
        <div class="header-container">
            <div class="header-left">
                <img src="./Assets/logo.png" alt=""/>
            </div>
            <div class="header-right">
                <div class="header-facebook">
                    <img src='./Assets/facebook.png' alt=""/>
                    <a href="#">Facebook</a>
                </div>
                <div class="header-instagram">
                    <img src='./Assets/insta.png' alt=""/>
                    <a href="#">Instagram</a>
                </div>
                <div class="header-phone">
                    <img src='./Assets/phone.png' alt=""/>
                    <a href="#">+7 (701) 938-04-63</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header