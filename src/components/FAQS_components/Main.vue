<template>
       <div class="container">
        <section class="programs_intro">
            <div class="items">
                <div class="offset">
                    <h1>Get Answers</h1>
                    <p>Here are our frequently asked questions</p>
                </div>
            </div>
            <div class="main_section">
                <div class="question">
                    <p><span>Q:</span>  HOW DO I ACCESS MOODYS ANALYTICS ANSWERS?</p>
                    <p class="answer">Please fill out the simple online form on the get help button. Moodys analytics answers team will get back to you asap.</p>
                </div>
                <div class="question">
                    <p><span>Q:</span> WHAT RANGE OF COURSES DOES MOODYS ANALYTICS ANSWERS SPECIALIZE IN? </p>
                    <p class="answer">You can browse our catalogue to view the programs we assist with at Moodys Analytics Answers.</p>
                </div>
                <div class="question">
                    <p><span>Q:</span>  HOW LONG DOES MOODYS ANALYTICS ANSWERS TAKE TO RESPOND TO CLIENTS INQUIRIES?</p>
                    <p class="answer">Moodys Analytics Answers has an outstanding technical team to offer support and guidance 24 hours a day, every day of the year. You do not have to worry about time zones and differences; at Moodys Analytics Solutions, we are always available to take on your orders, answer your queries, offer guidance, and settle your doubts. You can expect feedback within one hour of your queries.</p>
                </div>
                <div class="question">
                    <p><span>Q:</span> HOW MUCH DOES MOODYS ANALYTICS ANSWERS CHARGE FOR THEIR SERVICES?</p>
                    <p class="answer">We take pleasure in having the most competitive pricing in the industry without compromising quality. Due to our dedication to affordability, we offer reasonable charges for our services, guaranteeing that you get excellent value for your money. Rest assured that we work hard to uphold honesty and offer affordable solutions that suit your needs and surpass your expectations.</p>
                </div>
                <div class="question">
                    <p><span>Q:</span> HOW MUCH TIME DOES MOODY ANALYTICS ANSWERS TAKE TO COMPETE A COURSE UPON 
                        REQUEST?</p>
                    <p class="answer">Moodys Analytics Answers works with your timeline and offers personalized service depending on your needs. The time taken to complete the course depends on the complexity of the course. However, Moodys Analytics Answers takes the shortest time possible.</p>
                </div>
                <div class="question">
                    <p><span>Q:</span> WHAT PAYMENT OPTIONS ARE ACCEPTABLE BY MOODYS ANALYTICS ANSWERS?</p>
                    <div class="images">
                        <div class="image">
                          <img src="../../assets/images/paypal.png" alt="paypal icon">
                          <small >PayPal</small>
                        </div>
                        <div class="image">
                            <img src="../../assets/images/paypal.png" alt="western union icon">
                            <small>Western Union</small>
                        </div>
                        <div class="image">
                            <img src="../../assets/images/mobile-dollar.png" alt="mobile dollar icon">
                            <small>Mobile money</small>
                        </div>
                        <div class="image">
                            <img src="../../assets/images/mobile-dollar.png" alt="bank wire icon">
                            <small>Bank Wire Transfers</small>
                        </div>
                        <div class="image">
                            <img src="../../assets/images/visa.png" alt="visa icon">
                            <small>Visa</small>
                        </div>
                        <div class="image">
                            <img src="../../assets/images/mastercard.png" alt="mastercard">
                            <small>MasterCard</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
     .container{
        margin-bottom: 4%;
    }
    section.programs_intro .items{
    background: transparent;
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
   }
   section.programs_intro .items .offset{
    margin: -6% auto 0 auto;
    background: rgba(255, 255, 255, 1);
    width: 40%;
    text-align: center;
   }
   section.programs_intro .items .offset p{
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
   }
   .offset > h1{
     font-weight: 700;
     font-size: 30px;
    line-height: 36.31px;
   }
   .offset > h1::after{
    content: '';
    display: block;
    height: 3px;
    background-color: rgba(0, 100, 114, 1);
    width: 25%;
    margin-top: 8px;
    margin-left: 36%;
   }
   .main_section{
    padding-top: 8%;
    margin-top: -7%;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .question{
    width: 75%;
    padding: 10px;
    background: rgba(255, 255, 255, 1);
    margin-top: 1%;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    /* border: 1px solid rgba(0, 0, 0, 0.25); */
   }
   .question > a{
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 21.78px;
    color: rgba(3, 128, 180, 1);
   }
   .question p > span{
    font-weight: 700;
    font-size: 18px;
    line-height: 21.78px;
    color: rgba(0, 0, 0, 1);
   }
   .question > p:first-child{
    font-size: 15px;
    font-weight: 600;
    line-height: 21.78px;
    color: rgba(3, 128, 180, 1);
   }
   .question > p:last-child{
    font-size: 15px;
    font-weight: 400;
    line-height: 21.78px;
    color: rgba(0, 0, 0, 1);
   }
   .question .images{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
   }
   .images img{
    height: 50px;
    width: 50px;
   }
   .image{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
   }
   .image small{
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
   }
</style>