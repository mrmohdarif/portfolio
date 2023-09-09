const styleSwitcherToggle=document.querySelector(".style_switcher_logger");
styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector(".style_switcher").classList.toggle('open')
})
window.addEventListener("scroll",()=>{
    if(document.querySelector('.style_switcher').classList.contains('open'))
    {
        document.querySelector('.style_switcher').classList.remove('open')
    }
})

const dayNight=document.querySelector('.day_night');
dayNight.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})
// window.addEventListener("load",()=>{
//     if(document.body.classList.contains('dark'))
//     {
//         dayNight.querySelector("i").classList.add("")
//     }
// })