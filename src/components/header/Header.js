import React from 'react';
import './Header.scss';

function Header() {
  return(
    <div id="header" class="hero min-h-screen">
  <div class="hero-content text-center bg-inherit">
    <div class="max-w-md">
      <h1 id="jahid" class="text-white text-5xl font-bold pb-2 mb-10 "><span class="text-slate-600 text-opacity-80 font-lobster">Hello !</span> I'm Jahid Benhagoug</h1>
      <p class="text-white pt-6">Analytics Engineer @Cartier.</p>
      <p class="text-white pb-6">Looking for an exciting challenge in Analytics.</p>
      <a href="#experience"><button href="#experience" class="btn">Want to know me ?</button></a>
    </div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
</div>
  )
}

export default Header 