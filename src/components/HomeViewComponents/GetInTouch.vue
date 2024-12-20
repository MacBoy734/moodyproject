<template>
    <div class="container">
       <form action="" method="POST" class="form">
         <h2>Get in Touch</h2>
         <div class="names">
            <input type="text" name="firstName" id="firstName" placeholder="First Name">
            <input type="text" name="lastName" id="lastName" placeholder="Last Name">
         </div>
         <div class="contacts">
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="Phone" name="Phone" id="Phone" placeholder="Phone">
         </div>
         <input type="text" name="inquiry" id="inquiry" placeholder="what's your inquiry about?">
         <textarea name="message" id="message" cols="30" rows="3" placeholder="Type your message here"></textarea>
         <button type="submit">submit</button>
       </form>
    </div>
</template>
<style scoped>
  .container{
     height: 490px;
     margin-top: 50px;
     background-color: rgba(201, 237, 242, 1);
     display: flex;
     align-items: center; 
     justify-content: center;
  }

  .form{
    background-color: rgba(255, 255, 255, 1);
    height: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form > h2{
      font-weight: 400;
      font-size: 25px;
      line-height: 30.26px;
      color: rgba(0, 100, 114, 1);
  }
  .contacts, .names{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around
  }
  .contacts > input, .names > input{
    border-radius: 10px;
    background: rgba(3, 160, 181, 0.2);;
    font-size: 1.1em;
    padding: 5px 0 5px 15px;
    margin: 0 2px 0 2px;
    border: none;
    outline: none;
  }
  input#inquiry{
    border-radius: 10px;
    background: rgba(3, 160, 181, 0.3);
    font-size: 1.1em;
    padding: 10px 0 10px 20px;
    border: none;
    outline: none;
  }
  textarea{
    background: rgba(3, 160, 181, 0.3);
    border-radius: 10px;
    padding: 10px;
    font-weight: 400;
    font-size: 1.1em;
    border: none;
    outline: none;
  }
  button[type="submit"]{
    border-radius: 25px;
    background: rgba(3, 160, 181, 1);
    text-align: center;
    margin-left: 35%;
    margin-top: 10px;
    padding: 10px;
    color: white;
    font-weight: 400;
    width: 25%;
  }
</style>