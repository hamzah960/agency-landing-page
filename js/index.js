/*دالة تغيير تنسيقات الناف بارا عند النزول بالصفحة scroll */
function scrollFunction() {
    /*اذا نزلنا في الصفحة اكثر من 200 بكسل اضف الصنف اذا اقل احذف الصنف */
    if(document.documentElement.scrollTop > 200) { 
        document.getElementById("navbar").classList.add("noTransparrent");
    }else if(document.documentElement.scrollTop < 200) {
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}
/*دالة تنفذ الدالة السابقة عند تحريك الصفحة نزولا او صعودا */
window.onscroll = function() {
    scrollFunction();
};


/*عداد قسم احصائيات الشركة */

window.onload = function() {
    let website = new CountUp('website-count', 0, 250, 0, 2.5);
    website.start();
    let app = new CountUp('app-count', 0, 100, 0, 2.5);
    app.start();
    let user = new CountUp('user-count', 0, 10000, 0, 2.5);
    user.start();
    let video = new CountUp('video-count', 0, 30, 0, 2.5);
    video.start();
};




/*                      طريقة تعطي نتيجة قريبة ولكن ليست دقيقة طريقتي
window.onload = function() {
    for (let i=0; i<=250; i++) {
        web(i);
     }
     function web(i) {
       setTimeout(function() {
        document.getElementById('website-count').innerHTML = i;
       }, 2.5 * i);
     }
    for (let a=0; a<=100; a++) {
        app(a);
     }
     function app(a) {
       setTimeout(function() {
        document.getElementById('app-count').innerHTML = a;
       }, 2.5 * a);
     }
    for (let b=0; b<=10000; b++) {
        user(b);
     }
     function user(b) {
       setTimeout(function() {
        document.getElementById('user-count').innerHTML = b;
       }, 1 * b);
     }
    for (let c=0; c<=30; c++) {
        video(c);
     }
     function video(c) {
       setTimeout(function() {
        document.getElementById('video-count').innerHTML = c;
       }, 2.5 * c);
     }
    
}*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

  document.getElementById('fullYear').innerHTML = new Date().getFullYear();