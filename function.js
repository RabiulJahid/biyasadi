//allert function

const setAlert = ( msg , type = 'danger') => {
    return ` <p class = "alert alert-${type} d-flex justify-content-between" > ${msg} 
    <button data-bs-dismiss = "alert" class= "btn-close"</button></p>`;
}


/**
 * Check value is a number or not
 */
  
 const numberCheck = (num) => {
    let agePattern = /^[0-9]{1,3}$/;
    return agePattern.test(num);

 }
 



 
  //marriage age Calaulator

  const marrigeAgeCheck = (name, age, gender) => {
    if (gender == 'Male'){
        let marrige_age = 21;

        if(age >= marrige_age){
            return setAlert(`Hi ${name} vaiya, Your age is okay for marriage`, 'success');

        }else{
            return setAlert(` Hi ${name} vaiya, Your age is not okay, You have to wait ${marrige_age - age} years`,'danger');
        }
    }else{

        let marrige_age = 18;
        if(age >= marrige_age){
            return setAlert(` Hi ${name} apu, Your age is okay for marriage`,'success');

        }else{
            return setAlert(` Hi ${name} apu, Your age is not okay, You have to wait ${marrige_age - age} years`,'danger');
        }
    } 


  }
    