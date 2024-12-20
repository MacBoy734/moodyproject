<template>
    <div class="container">
        <section class="intro">
            <div class="first_section">
                <div class="info">
                    <h2>Welcome to Moody's Analytics Solutions</h2>
                    <p>Moodys Analytics Answers is a platform that provides solutions for all programs offered by Moodys Analytics. The Moody Analytics answers team is committed to assisting clients in achieving success in their virtual learning endeavours. Moodys analytics answers understands that life has become busy due to various commitments. At Moodys Analytics answers, we help our clients by completing these courses for them at an affordable cost, ensuring that our beneficiaries attain quality grades and immediate certification.</p>
                </div>
                <div class="mission_section">
                    <button>Mission</button>
                    <button>Vision</button>
                    <button>Our Commitment</button>
                    <p class="section_description">We are a team of dedicated professionals who are deeply familiar with the Moody's Analytics curriculum.</p>
                </div>
            </div>
            <div class="last_section">
                <img src="../../assets/images/Rectangle_60.png" alt="Moody'analytics" />
            </div>
        </section>
        <section class="core_values">
            <h2 style="text-align: center">Core Values</h2>
            <div class="templates">
               <div class="template"> 
                  <img src="../../assets/images/check-square.png" alt="check-square icon">
                  Quality Service
                </div>
               <div class="template">
                    <img src="../../assets/images/book-open.png" alt="book-open icon">
                    Academic Excellence
               </div>
               <div class="template">
                    <img src="../../assets/images/key.png" alt="key icon">
                    Accesibility
               </div>
               <div class="template">
                    <img src="../../assets/images/user-check.png" alt="user-check icon">
                    Inclusivity
               </div>
               <div class="template">
                    <img src="../../assets/images/globe.png" alt="globe icon">
                    Universal Outreach
               </div>
               <div class="template">
                    <img src="../../assets/images/shield.png" alt="shield icon">
                    Trust
               </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
 .container{
    margin-top: 60px;
  }
   .container section.intro{
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-around;
   }
   .first_section{
    width: 40%;
   }
   .info h2{
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
   }
   .info p{
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
   }
   .info::after{
    content: '';
    height: 1px;
    display: block;
    background-color: rgba(151, 151, 151, 1);
    margin-top: 15px;
   }
   .mission_section{
    margin-top: 20px;
   }
   .mission_section button:first-child{
    background: rgba(3, 160, 181, 1);
    color: rgba(255, 255, 255, 1);
   }
   .mission_section button{
    margin: 0 15px 0 20px;
    border-radius: 1em;
    outline: none;
    padding: 8px 15px 8px 15px;
    font-size: .8em;
    border: none;
    font-weight: 400;
    line-height: 20px;
    background: transparent;
    text-align: center;
   }
   .mission_section p{
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
   }
   /* styling the image */
   .last_section img{
    width: 400px;
    height: auto;
   }

   /* core values section styling */
   .templates{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
   }
   .templates *{
    width: 220px;
    height: 220px;
    text-align: center;
    background: rgba(3, 160, 181, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    line-height: 30.26px;
    font-size: 15px;
   }
   .templates div:nth-child(2), .templates div:nth-last-child(2){
    background-color: rgba(0, 8, 32, 1);
    color: rgba(255, 255, 255, 1);
   }
   .template{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .template > img{
    height: 50px;
    width: 50px;
   }
</style>