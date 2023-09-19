const b3 = document.querySelector(".b3")
const popupb3 = document.getElementById("popupb3")
b3.addEventListener(
    "click", function(){
        Swal.fire({
            title: '<strong>Tyfurthief</strong>',
            html:
              '<img src="./avatarflo.png" height="100px" width="100px"> <br>' +
              'You can use <b>bold text</b>, ' +
              '<a href="//sweetalert2.github.io">links</a> ' +
              'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i> test',
            cancelButtonAriaLabel: 'Thumbs down'
          })
        // popupb3.style.display="block"
    }
)
popupb3.addEventListener(
    "click", function(){
        popupb3.style.display="none"
    }
)