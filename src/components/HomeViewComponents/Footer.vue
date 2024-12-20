<template>
    <div class="footer_container">
        <ul class="footer_links">
            <li class="link"><a href="#">Insights</a></li>
            <li class="link"><router-link to="/">Solutions</router-link></li>
            <li class="link"><a href="#">Learning</a></li>
            <li class="link"><a href="#">Events</a></li>
            <li class="link"><router-link to="/about">About</router-link></li>
            <li class="link"><router-link to="/blogs">Blog</router-link></li>
        </ul>
        <div class="line"></div>
        <div class="handles">
            <img src="../../assets/images/logo.png" alt="moody's logo">
            <small>&copy; Copyright 2023-Moody's analytics</small>
        </div>
    </div>
</template>
<script setup>
   import { RouterLink } from 'vue-router'
</script>
<style scoped>
 .footer_container{
    background-color: rgba(10, 20, 47, 1);
    height: 250px;
    display: flex; 
    flex-direction: column;
    align-items:center;
    justify-content: center;
 }
 ul.footer_links{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
 }
 ul.footer_links li, ul.footer_links li > a{
    text-decoration: none;
    list-style-type: none;
    color: rgb(150, 146, 146);
    font-weight: 400;
 }

 /* setting the line */
 .line{
    height: 3px;
    width: 55%;
    margin-top: 4%;
    background-color: rgb(150, 146, 146);
 }
 .handles{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0;
    width: 50%;
 }
 .handles small{
    color: rgb(150, 146, 146);
 }
</style>