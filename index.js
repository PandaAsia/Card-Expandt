((d) => {
  let $expandbtn = d.querySelectorAll(".card-items a");
  let $MostrarTitulo = d.querySelectorAll(".card-title");

  $expandbtn.forEach((btn, index) => {
    btn.addEventListener("mouseover", () => {
      for (let i = 0; i < $expandbtn.length; i++) {
        if (index == i) {
          $expandbtn[i].parentElement.classList.toggle("expand");
          $MostrarTitulo[i].classList.add("change-visibily");
        } else {
          $expandbtn[i].parentElement.classList.remove("expand");
          $MostrarTitulo[i].classList.remove("change-visibily");
        }
      }
    });
  });
})(document);
