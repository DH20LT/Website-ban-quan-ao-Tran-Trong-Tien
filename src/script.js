var counter = 1;

setInterval(function(){
    document.getElementById('img-' + counter).checked = true;
    counter ++;
    if(counter > 3){
    counter = 1;
    }
}, 5000);

// Chọn tất cả img
const imgPostion = document.querySelectorAll(".Slider_img img")

// Chọn cái container của ác img
const imgContainer = document.querySelector('.Slider_img')

// Tạo Object
let images = document.getElementsByClassName("main-img")

//
let index = 0
let imgNumber = imgPostion.length // số lượng ảnh
console.log(imgNumber)

// Để áp css left: 
imgPostion.forEach(function(image, index) {
    image.style.left = index * 100 + "%"
})

function imgSlide(){
    index ++;
    if (index >= imgNumber) {
        index = 1
    }
    else {
        imgContainer.style.left =   "-" + index * 100 + "%"
        console.log(imgContainer.style.left)
    }
}

//setInterval(imgSlide, 5000)

function showSlie(n) {
    
}

// sticky header 
const header = document.querySelectorAll("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    console.log(x)
    if(x > 0){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})
// login vs reg

        const loginBtn = document.querySelector('.icon-login')
        const modalLogin = document.querySelector('.js-modal-login')
		const modalLoginClose = document.querySelector('.js-modal-login-close')
		const modalLoginContainer = document.querySelector('.js-modal-login-container')

        function hideLoginFrom(){
			modalLogin.classList.remove('open')
		}

		function showLoginFrom(){
			modalLogin.classList.add('open')
		}

		loginBtn.addEventListener('click', showLoginFrom)


		modalLoginClose.addEventListener('click', hideLoginFrom)
		modalLogin.addEventListener('click', hideLoginFrom)
		modalLoginContainer.addEventListener('click', function (event) {
			event.stopPropagation()
		})


        const registerNext = document.querySelector('.js-next-register')
        const modalRegister = document.querySelector('.js-modal-register')
		const modalRegisterClose = document.querySelector('.js-modal-register-close')
		const modalRegisterContainer = document.querySelector('.js-modal-register-container')

        function hideRegisterForm(){
			modalRegister.classList.remove('open')
		}

		function showRegisterForm(){
			modalRegister.classList.add('open')
		}

		registerNext.addEventListener('click', showRegisterForm)
        registerNext.addEventListener('click', hideLoginFrom)

		modalRegisterClose.addEventListener('click', hideRegisterForm)
		modalRegister.addEventListener('click', hideRegisterForm)
		modalRegisterContainer.addEventListener('click', function (event) {
			event.stopPropagation()
		})
//Product
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block"

    })
    
}
if(chitiet){
    chitiet.addEventListener("click",function(){
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"

    }) 
}
const button = document.querySelector(".product-content-right-bottom-top")
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("active")
    })
}
//Product IMG
const bigimg = document.querySelector(".product-content-left-big-img img")
const smailImg = document.querySelectorAll(".product-content-left-smail-img img")
smailImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigimg.src= imgItem.src
    })
})
//login đăng nhập
const loginSubmit = document.getElementById("login-ok")

function kt_login(){

    const username = document.getElementById("login-account").value
    const password = document.getElementById("login-password").value
    if (username == "" || password == "")
    {
        alert("Vui lòng nhập tài khoản!");
    } else if(username === "ok@gmail.com" && password === "ok")
    {
        alert("Đăng nhập thành công!");
    } else
    {
        alert("Tài khoản và mật khẩu không đúng!");
    }
}
//đăng ký
loginSubmit.addEventListener('click', kt_login)

const regisSubmit = document.getElementById("register-ok");
function kt_regis(){

    const username = document.getElementById("register-account").value;
    const password = document.getElementById("register-password").value;
    const passwordRecheck = document.getElementById("register-password-recheck").value;
    const email =document.getElementById("register-email").value;
    if(email == "" || username == "" || password == "" || passwordRecheck == "")
    {
        alert("Vui lòng nhập thông tin đầy đủ!");
    } else if(password != passwordRecheck)
    {
        alert("Mật khẩu không khớp!");
    }
    else if(checkEmail(email) === true)
    {
        alert("Đăng ký thành công!")
    }
    else
    {
        alert("Email này đã có người sử dụng, vui lòng dùng email khác!");
    }
}

function checkEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
}

regisSubmit.addEventListener('click', kt_regis)