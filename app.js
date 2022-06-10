
// Get Elements
const age_form = document.getElementById ('age_form');
const msg = document.querySelector ('.msg');
const msg_footer = document.querySelector ('.msg_footer');


 //submit age form

 age_form.onsubmit = (e) => {
    e.preventDefault();
     
    // get fields value
    let name = age_form.querySelector('input[name = "name"]');
    //  console.log(name.value);
    let age = age_form.querySelector ( 'input[name = "age"]');
    //  console.log(age.value);
    let gender = age_form.querySelectorAll('input[name = "gender"]');
     // get gender value another method
     //let gender = age_form.querySelector (' input[name = "age"] : checked');
    //jahatu akar othik data tai loop use korta hoba
    
    // get gender value
    let gender_name = '';
    gender.forEach ( item=> {

        if(item.checked) {
            gender_name = item.value;

        }
    });
  

    
   // form validation

   if ( name.value == '' || age.value == '' || gender_name == '' ){
     
    msg.innerHTML = setAlert ('all field are required');

   }else if(numberCheck(age.value) == false){
    msg.innerHTML = setAlert ('Your age is invalid','warning');
   }else{


   //marriage function
   /*
   let marrige_age = 0;
   if(gender_name == 'Male'){
       marrige_age = 21;
   }else{
       marrige_age = 18;
   }
   */
           
   
            /* Option 222222222222*/
     /*   
   let marrige_age = gender_name == 'Male' ? 21 : 18;
   if(gender_name == 'Male'){
       if(age.value >= marrige_age){
        msg_footer.innerHTML = ` Hi ${name.value} vaiya, apnar marriage age is ok`, 'success';
       }else{
        msg_footer.innerHTML = setAlert (` Hi ${name.value} vaiya, apnar marriage is not okay,
           you have to wait ${marrige_age - age.value} years`);
       }
   }else{
    if(age.value >= marrige_age){
        msg_footer.innerHTML = ` Hi ${name.value} apu, apnar marriage age is ok`;
    }else{
        msg_footer.innerHTML = ` Hi ${name.value} apu, apnar marriage is not okay,
        you have to wait ${marrige_age - age.value} years`
    }
   }
   */
    
   /*333333333333*/
     msg_footer.innerHTML =  marrigeAgeCheck ( name.value, age.value, gender_name );
    
   }
  

 } 