// var n = parseInt( prompt("1 or 2 or 3"));

// switch(n){
//     case 1:
//         guessPostCode();
//         break;
//     case 2:
//         guessNumber();
//         break;
//     case 3:
//         guessEmail();
//         break;
// }

function guessEmail() {
    var email = prompt("Please enter your email");
    var re = /^([a-zA-Z0-9]\.?)+[^\.]@(edu|gmail|ymail|icloud|outlook|yahoo|hotmail).com(\.bd)?$/;
    
    if (re.test(email)) {
       
        swal("Boom!", "Your email is matched with validation test!", "success");

    }
    else {
        swal("Ops!", "your email did not pass validation test", "error");

    }
}


function guessNumber() {
    var re;
    var number = prompt("Please enter your phone number");
     re = /^(\+)?(88)?01[0-9]{9}$/;

    if (re.test(number)) {
        swal("Boom!", "Your phone number is matched with validation test!", "success");
    }
    else {
        swal("Ops!", "your phone number did not pass validation test", "error");

    }
}

function guessPostCode() {
    
    var re =  /^[0-9]{4}$/;
    var code = prompt("Please enter your post code");

   if( re.test(code)){
    swal("Boom!", "Your postcode is matched with validation test!", "success");
   }
   else{
    swal("Ops!", "your postcode did not pass validation test", "error");

   }
}

