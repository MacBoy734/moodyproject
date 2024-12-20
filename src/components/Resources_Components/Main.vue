<template>
    <div class="container">
        <section class="programs_intro">
            <div class="items">
                <div class="offset">
                    <h1>Get Solutions</h1>
                    <p>Answers tailored to meet your learning needs</p>
                </div>
            </div>
            <div class="main_section">
                <div class="question_input">
                  <textarea type="text" name="questiom" id="question" rows="3" cols="30" placeholder="Hey, What’s your question?"> kk</textarea>
                  <img src="../../assets/images/search.png" alt="search icon" />
                </div>
                <div class="question_info">
                    <img src="../../assets/images/help-circle.png" alt="help icon">
                    Questions asked by the client  on the text box above will appear here. this is how they will look.
                </div>
                <div class="questions_found">
                    <p>We have found 3 similar questions that have been answered!</p>
                </div>
                <div class="question">
                    <p><span>Q:</span>  This is the first similar question. It might highlight some of the keywords found.</p>
                    <a href="#">See Expert Answer</a>
                </div>
                <div class="question"> 
                    <p><span>Q:</span>  This is the second similar question. It might highlight some of the keywords found.</p>
                    <a href="#">See Expert Answer</a>
                </div>
                <div class="question">
                    <p><span>Q:</span>  This is the third similar question. It might highlight some of the keywords found.</p>
                    <a href="#">See Expert Answer</a>
                </div>
                <div class="get_help">
                    <div>
                        <p>Not what you’re looking for? </p>
                        <p>Submit your question to an expert</p>
                    </div>
                    <div class="link">
                        <a href="#">Get Expert Help</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .container{
        margin-bottom: 1px;
        background: rgba(201, 237, 242, 1);
        transform: translateY(-2.4%);
    }
    section.programs_intro .items{
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
   }
   section.programs_intro .items .offset{
    background: rgba(201, 237, 242, 1);
    width: 45%;
    text-align: center;
    height: 60px;
    transform: translate(60%, -100%);
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
   section.programs_intro .items .offset p{
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
   }
   .main_section{
    padding-top: 60px;
    margin-top: -7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/images/wavy.png");
    background-position: top;
    background-repeat: no-repeat;
   }
   .questions_found{
    font-weight: 700;
    font-size: 18px;
    line-height: 21.78px;
    width: 75%;
    margin-top: 5px;
   }
   .question_info{
    background: rgba(236, 255, 239, 1);
    width: 75%;
    padding: 25;
    margin-top: 1%;
    border-radius: 10px;
    padding-top: 35px;
    padding-bottom: 35px;
    text-align: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   }
   .question_info img{
    height: 20px;
    width: 20px;
    margin: 0 5px -5px 0;
   }
   .question_input{
    background: rgba(255, 255, 255, 1);
    padding: 2% 0 2% 5%;
    width: 70%;
    margin-top: 40px;
    border-radius: 10px;
    position: relative;
   }
   .question_input img{
    background: rgba(3, 160, 181, 1);
    position: absolute;
    top: 20%;
    right:28%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: .3rem;
   }
   .question_input textarea{
    width: 60%;
    padding: 10px;
    border: 3px solid rgba(3, 160, 181, 1);
    font-weight: 400;
    font-size: 18px;
    border-radius: 10px;
   }
   .question{
    width: 75%;
    padding: 10px;
    background: rgba(255, 255, 255, 1);
    margin-top: 2%;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   }
   .question > a{
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 21.78px;
    color: rgba(3, 128, 180, 1);
    margin-left: 2%;
   }
   .question p > span{
    font-weight: 700;
    font-size: 18px;
    line-height: 21.78px;
    color: rgba(0, 0, 0, 1);
   }
   .question > p{
    font-size: 15px;
    font-weight: 400;
   }
   .get_help{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 60%;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin-bottom: 10%;
    margin-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   }
   .link a{
    text-decoration: none;
    padding: 7px 15px 7px 15px;
    text-align:center;
    background: rgba(3, 160, 181, 1);
    border-radius: 10px;
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-weight: 400;
    line-height: 21.78px;
   }
   .get_help p:first-of-type{
    font-size: 15px;
    font-weight: 600;
    line-height: 21.78px;
    color: rgba(0, 0, 0, 1);
   }
   .get_help p:last-of-type{
    font-size: 15px;
    font-weight: 400;
    line-height: 21.78px;
    color: rgba(0, 0, 0, 1);
   }
</style>