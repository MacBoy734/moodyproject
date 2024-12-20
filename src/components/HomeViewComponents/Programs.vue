<template>
    <div class="programs_container">
        <section class="programs_intro">
            <div class="items">
                <h1>Our Programs</h1>
                <p>Browse through our catalogue to view the programs we assist with at Moody's analytics solutions</p>
            </div>
        </section>
        <div class="background"></div>
        <section class="image_links">
            <div class="image_link" id="image_1">commercial Banking</div>
            <div class="image_link" id="image_2">compliance</div>
            <div class="image_link" id="image_3">Investment Banking</div>
            <div class="image_link" id="image_4">credit Unions</div>
            <div class="image_link" id="image_5">ESG & Banking</div>
            <div class="image_link" id="image_6">private Banking</div>
            <div class="image_link" id="image_7">Retail Banking</div>
            <div class="image_link" id="image_8">SME Banking</div>
        </section>
    </div>
</template>
<style scoped>
   .programs_container{
    position: relative;
   }
   .programs_container h1{
    font-weight: 700;
    font-size: 30px;
    line-height: 36.31px;
    color: rgba(3, 160, 181, 1);
    position: relative;
   }
   .programs_container h1::after{
    content: '';
    display: block;
    height: 4px;
    background-color: rgba(0, 225, 255, 1);
    width: 173.03px;
    position: absolute;
    bottom: -10px;
    left: 38%;
   }
   section.programs_intro{
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
   }
   section.programs_intro .items{
    background: rgba(255, 255, 255, 1);
    width: 60%;
    text-align: center;
    height: 130px;
    transform: translate(35%, -100%);
   }
   section.programs_intro .items p{
    font-size: 15px;
    font-weight: 500;
    line-height: 18.15px;
   }

   .background{
     background-color: rgba(3, 160, 181, 1);
     position: absolute; 
     height: 261px;
     top: 38%;
     left: 0;
     width: 100%;
     z-index: -1;
   }
   
   section.image_links .image_link{
    height: 180px;
    width: 180px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
   }
   section.image_links{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 0;
    justify-items: center;
    align-items: center;
    height: auto;
   }

   /* setting background images */
   section.image_links #image_1{
    background-image: url("../../assets/images/Rectangle_38.png");
   }
   section.image_links #image_2{
    background-image: url("../../assets/images/Rectangle_10.png");
   }
   section.image_links #image_3{
    background-image: url("../../assets/images/rectangle_8.png");
   }
   section.image_links #image_4{
    background-image: url("../../assets/images/Rectangle_10.png");
   }
   section.image_links #image_5{
    background-image: url("../../assets/images/Rectangle_38.png");
   }
   section.image_links #image_6{
    background-image: url("../../assets/images/Rectangle_2.png");
   }
   section.image_links #image_7{
    background-image: url("../../assets/images/Rectangle_15.png");
   }
   section.image_links #image_8{
    background-image: url("../../assets/images/Rectangle_14.png");
   }
</style>