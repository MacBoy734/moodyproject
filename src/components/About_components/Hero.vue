<template>
    <div class="hero">
        <section class="navbar">
            <img src="../../assets/images/logo.png" alt="moody analytics logo" />
            <nav class="nav_links">
                <router-link to="/">solutions</router-link>
                <router-link to="/resources">resource center</router-link>
                <router-link to="/about">about</router-link>
                <a href="#">contact us</a>
            </nav>
            <input type="text" placeholder="Explore courses"/>
        </section>
        <section class="middle">
           <h1>About <span>Moody's</span> Analytics Solutions</h1>
           <h6>stay curious, stay informed.</h6>
        </section>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>


<style scoped>
 div.hero{
    background-image: url("../../assets/images/Rectangle_20.png");
    background-size: cover;
    height: 450px;
 }
 .hero > section.navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
 }
 section.navbar nav.nav_links{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
 }
 .navbar img{
    height: 80px;
    width: 180px;
    margin-top: 21px;
 }
 nav.nav_links > a{
    text-decoration: none;
    font-size: 14px;
    line-height: 16.94px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
 }
  .navbar input{
    width: 167px;
    height: 32px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    text-align: center;
  }

 .hero section.middle{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }

 .hero section.middle h1{
    color: white;
    font-size: 40px;
    font-weight: 700;
    line-height: 48.41px;
    /* width: 496px; */
    margin-top: 80px;
 }
 .hero section.middle h1::after{
    content: '';
    display: block;
    background-color: rgba(0, 225, 255, 1);
    height: 4px;
    margin-top: 9px;
    width: 80%;
    margin-left: 10%;
 }

 .hero section.middle h6{
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    line-height: 18.15px;
    margin-top: 2px;
 }
 .hero section.middle h1 span{
    color: rgba(3, 160, 181, 1);
 }


</style>