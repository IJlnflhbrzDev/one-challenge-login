function HandleRegister(e) {
     document.getElementsByTagName('h1')[0].innerHTML="Register to FireFall App";
     document.getElementsByClassName('inputEmail')[0].placeholder="Enter Your Mail";
     document.getElementsByClassName('inputPassword')[0].placeholder="Enter Your Password";
}

function HandleLogin(e) {
     Swal.fire({
          position: 'mid',
          icon: 'success',
          title: 'Welcome to the FireFall App',
          showConfirmButton: false,
          timer: 1500
})

document.getElementsByTagName('h1')[0].innerHTML="FireFall App";
document.getElementsByClassName('inputEmail')[0].placeholder="Email";
document.getElementsByClassName('inputPassword')[0].placeholder="Password";
}