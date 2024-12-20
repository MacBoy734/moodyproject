<template>
    <div class="hero">
        <section class="navbar">
            <img src="../../assets/images/logo.png" alt="moody analytics logo" />
            <nav class="nav_links">
                <a href="#">solutions</a>
                <router-link to="/resources">resource center</router-link>
                <router-link to="/about">about</router-link>
                <a href="#">contact us</a>
            </nav>
            <input type="text" placeholder="Explore courses"/>
        </section>
        <section class="middle">
           <h1>About <span>Learning</span> Solutions</h1>
           <h6>Fire Up Your Professional Career with Moodys Analytics Answers- Where Success is Guaranteed.</h6>
        </section>
        <section class="buttons">
           <a href="#">Get Expert Help</a>
           <a href="#">View Our Solutions</a>
        </section>
    </div>
</template>
<script setup>
   import { RouterLink } from 'vue-router'
</script>
<style scoped>
 div.hero{
    background-image: url("../../assets/images/Rectangle98.png");
    background-size: cover;
    height: 300px;
    padding-bottom: 30%;
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
    height: 70px;
    width: 130px;
    margin-top: 21px;
 }
 nav.nav_links > *{
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
    width: 496px;
    margin-top: 80px;
 }
 .hero section.middle h1::after{
    content: '';
    display: block;
    background-color: rgba(0, 225, 255, 1);
    height: 4px;
    width: 707px;
    margin-top: 35px;
    margin-left: -25%;
 }

 .hero section.middle h6{
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    line-height: 18.15px;
    margin-top: 30px;
 }
 .hero section.middle h1 span{
    color: rgba(3, 160, 181, 1);
 }


 section.buttons{
    display: flex;
    align-items: center;
    justify-content: space-evenly;

 }
 section.buttons a{
    text-decoration: none;
    width: 190px;
    padding: 20px 0 20px 0;
    border-radius: 10px;
    border: 1px solid rgba(3, 160, 181, 1);
    color: white;
    text-align:center;
    font-weight: 500;
    font-size: 12px;
    line-height: 14.52px;
    margin-top: 50px;
 }
 section.buttons a:first-child{
    background: rgba(3, 160, 181, 1);
 }
</style>