
  //create a function
let getvalue = () => {
    //Access input values from input Section
    let access= document.querySelector('#feet').value;

    if (access <=0){
        alert("Please Enter value > 0");//If value is less than 0 this Alert will be show
    }
    else if (access >=1){
        document.querySelector('.result').innerHTML = "CM - "+access * 30.48;
        //It's convert feet to centemetres
    }
    else if(access>"a" || access<"z" && access>"A" || access<"Z"){
        alert("Alphabets are not allowed enter only number");
       //If input values ara Alphabates show this error
    }
    else{
        document.write("null");
    }
};
