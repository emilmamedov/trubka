let images = document.images;
let images_total_count = images.length;
let images_loaded_count = 0;
let perc_display = document.getElementById('load_perc');
let preloader = document.getElementById('page-preloader');


for (let i = 0; i < images_total_count; i++) {
    imag_clone = new Image();
    imag_clone.onload = image_loaded;
    imag_clone.onerror = image_loaded;
    imag_clone.src = images[i].src;
}

function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
    if (images_loaded_count >= images_total_count) {
        setTimeout(function () {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}











// PRELOADER
// document.body.onload = function () {
//     setTimeout(function () {
//         let preloader = document.getElementById('page-preloader');
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 5000)
// }
// // setTimeout(function() {
// //     $('#page-preloader').addClass('done');
// // }, 3700);
// function counter(percent, className) {
//     let counter = 0;
//     let interval = setInterval(() => {
//         document.querySelector(className).innerHTML = ++counter + "%";
//         counter === 100 ? clearInterval(interval) : false;
//     }, 60)
// }
// counter(100, '.loader')