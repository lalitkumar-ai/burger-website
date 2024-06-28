const hambuger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navlink = document.querySelectorAll(".nav__link");

navlink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
hambuger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".items_wrap");
const foods = document.querySelectorAll(".food");
const beverage = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");




tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(tab=>{
      tab.classList.remove("active")
    })
    tab.classList.add("active")

    const tabval = tab.getAttribute("data-tabs")


    all.forEach(items=>{
      items.style.display = "none";
    })
    if (tabval=='food'){
      foods.forEach(items=>{
        items.style.display = "block";
      })
    }
    else if (tabval=="snack"){
      snacks.forEach(items=>{
        items.style.display = "block";
      })
    }
    else if (tabval=="beverage"){
      beverage.forEach(items=>{
        items.style.display = "block";
      })
    }
    else if (tabval=="all"){
      all.forEach(items=>{
        items.style.display = "block";
      });
    }
  })
})
