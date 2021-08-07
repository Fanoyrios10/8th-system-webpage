let dropbtn2 = document.querySelectorAll(".dropbtn2");
dropbtn2.forEach(element => {
      let sibling = element.nextElementSibling;
      let child = element.lastChild
      $(element).click(function () { 
        $(sibling).animate({
          height:'toggle'
        })
        if (child.classList.value === "fas fa-arrow-alt-circle-down" || child.classList.value === "fas fa-arrow-alt-circle-down transitionDown") {
          $(child).removeClass("transitionDown")
          $(child).addClass("transitionUp")
        }else{
          $(child).removeClass("transitionUp")
          $(child).addClass("transitionDown")
        }
      });
  })
