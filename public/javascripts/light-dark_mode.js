"use strict";
let darkLightModeButton = document.querySelector(".dark-light_mode_button");
let showSideNavButton = document.querySelector(".show_side_nav");
let showSideNav = false;
let darkMode = false;

darkLightModeButton.addEventListener("click", function () {
  sessionStorage.setItem("dark_mode_old", JSON.stringify(darkMode));
  let body = document.querySelector("body");
  let mainBody = document.querySelector(".main-body");
  let siteTitle = document.querySelector(".site-title");
  let second_column = document.querySelector(".second_column")
  let pageName = document.querySelector(".page_name")
  let inputs = document.querySelectorAll("input")
  if (darkMode) {
    darkMode = false;
    sessionStorage.setItem("dark_mode_new", JSON.stringify(darkMode));
    darkLightModeButton.firstChild.classList.remove('fa-sun')
    darkLightModeButton.firstChild.classList.add('fa-moon')
    darkLightModeButton.title = 'Dark Mode'
    mainBody.style.backgroundColor = "white";
    mainBody.style.color = "black";
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.style.backgroundColor = "white"
      element.style.color = "black"
    }
    second_column.style.backgroundColor = "white"
    body.style.background = `linear-gradient(
      to bottom,
      rgb(0, 124, 237) 1%,
      rgb(204, 231, 255) 100%
    )`;
    siteTitle.style.background = "white"
    siteTitle.style.color = "blue";
    if (pageName.value == 'index') {
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let homeArticles = document.querySelectorAll(".home_article");
      homeArticles.forEach(e => {
        e.classList.remove("bg-dark");
        e.classList.remove('text-white');
      });
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
    } else if (pageName.value == 'scout_group_members') {
      let gridItemTwoColumnScoutGroupMember = document.getElementsByClassName("grid_item_two_column_scout_group_members")
      let gridContainerTwoColumnScoutGroupMember = document.querySelector(".grid_container_two_column_scout_group_members");
      gridContainerTwoColumnScoutGroupMember.style.backgroundColor = 'white';
      for (let i = 0; i < gridItemTwoColumnScoutGroupMember.length; i++) {
        const element = gridItemTwoColumnScoutGroupMember[i];
        element.style.backgroundColor = 'white';
        element.style.color = 'black'
      }
    } else if (pageName.value == 'contact') {
      let contactUsImage = document.getElementById('contact_us_image');
      let singleTextArea = document.querySelector('textarea');
      singleTextArea.style.backgroundColor = 'white';
      singleTextArea.style.color = 'black';
      contactUsImage.src = '/images/contact_us/contact-us-1908763_1920.png'
    } else if (pageName.value == 'calendar_2021_2022') {
      let calendarTableFull = document.querySelectorAll('.calendar_table_full');
      let calendarTableSmall = document.querySelectorAll('.calendar_table_small')
      let calendarMonth = document.querySelector("#calendar_month");
      calendarMonth.style.backgroundColor = 'white'
      calendarMonth.style.color = 'black'
      calendarTableFull.forEach(e => {
        e.classList.remove('table-dark')
      });
      calendarTableSmall.forEach(e => {
        e.classList.remove('table-dark')
      });
    }else if(pageName.value == 'scout_group_annoncements'){
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let gridContainerTwoColumnArticle = document.querySelector('.grid_container_two_column_article');
      gridContainerTwoColumnArticle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
    }
  } else {
    darkMode = true;
    sessionStorage.setItem("dark_mode_new", JSON.stringify(darkMode));
    let darkModeNew = JSON.parse(window.sessionStorage.getItem("dark_mode_new"));
    darkLightModeButton.firstChild.classList.remove('fa-moon')
    darkLightModeButton.firstChild.classList.add('fa-sun')
    darkLightModeButton.title = 'Light Mode'
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.style.backgroundColor = "rgb(32, 32, 32)"
      element.style.color = "white"
    }
    mainBody.style.backgroundColor = "rgb(32, 32, 32)";
    second_column.style.backgroundColor = "rgb(24, 24, 24)";
    mainBody.style.color = "white"
    body.style.background = `linear-gradient(
      to bottom,
      rgb(0, 0, 0) 5%,
      rgb(79, 105, 136) 100%
    )`;
    siteTitle.style.background = "rgb(32, 32, 32)"
    siteTitle.style.color = "red";
    if (pageName.value == 'index') {
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let homeArticles = document.querySelectorAll(".home_article");
      homeArticles.forEach(e => {
        e.classList.add("bg-dark");
        e.classList.add('text-white');
      });
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
      }
    } else if (pageName.value == 'scout_group_members') {
      let gridItemTwoColumnScoutGroupMember = document.getElementsByClassName("grid_item_two_column_scout_group_members")
      let gridContainerTwoColumnScoutGroupMember = document.querySelector(".grid_container_two_column_scout_group_members");
      gridContainerTwoColumnScoutGroupMember.style.backgroundColor = 'rgb(32, 32, 32)';
      for (let i = 0; i < gridItemTwoColumnScoutGroupMember.length; i++) {
        const element = gridItemTwoColumnScoutGroupMember[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
        element.style.color = 'white'
      }
    } else if (pageName.value == 'contact') {
      let contactUsImage = document.getElementById('contact_us_image');
      let singleTextArea = document.querySelector('textarea');
      singleTextArea.style.backgroundColor = 'rgb(32, 32, 32)';
      singleTextArea.style.color = 'white';
      contactUsImage.src = '/images/contact_us/contact-us-1908763_1920_dark.png'
    } else if (pageName.value == 'calendar_2021_2022') {
      let calendarTableFull = document.querySelectorAll('.calendar_table_full');
      let calendarTableSmall = document.querySelectorAll('.calendar_table_small');
      let calendarMonth = document.querySelector("#calendar_month");
      calendarMonth.style.backgroundColor = 'rgb(32, 32, 32)'
      calendarMonth.style.color = 'white'
      calendarTableFull.forEach(e => {
        e.classList.add('table-dark')
      });
      calendarTableSmall.forEach(e => {
        e.classList.add('table-dark')
      });
    }else if(pageName.value == 'scout_group_annoncements'){
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let gridContainerTwoColumnArticle = document.querySelector('.grid_container_two_column_article');
      gridContainerTwoColumnArticle.style.backgroundColor = 'rgb(32, 32, 32)';
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
      }
    }
  }
})
let darkModeNew = JSON.parse(window.sessionStorage.getItem("dark_mode_new"));

function darkLighModeOnLoad() {
  let body = document.querySelector("body");
  let mainBody = document.querySelector(".main-body");
  let siteTitle = document.querySelector(".site-title");
  let second_column = document.querySelector(".second_column")
  let pageName = document.querySelector(".page_name")
  let inputs = document.querySelectorAll("input")
  if (!darkModeNew) {
    darkMode = false;
    darkLightModeButton.firstChild.classList.remove('fa-sun')
    darkLightModeButton.firstChild.classList.add('fa-moon')
    darkLightModeButton.title = 'Dark Mode'
    mainBody.style.backgroundColor = "white";
    mainBody.style.color = "black";
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.style.backgroundColor = "white"
      element.style.color = "black"
    }
    second_column.style.backgroundColor = "white"
    body.style.background = `linear-gradient(
      to bottom,
      rgb(0, 124, 237) 1%,
      rgb(204, 231, 255) 100%
    )`;
    siteTitle.style.background = "white"
    siteTitle.style.color = "blue";
    if (pageName.value == 'index') {
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let homeArticles = document.querySelectorAll(".home_article");
      homeArticles.forEach(e => {
        e.classList.remove("bg-dark");
        e.classList.remove('text-white');
      });
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
    } else if (pageName.value == 'scout_group_members') {
      let gridItemTwoColumnScoutGroupMember = document.getElementsByClassName("grid_item_two_column_scout_group_members")
      let gridContainerTwoColumnScoutGroupMember = document.querySelector(".grid_container_two_column_scout_group_members");
      gridContainerTwoColumnScoutGroupMember.style.backgroundColor = 'white';
      for (let i = 0; i < gridItemTwoColumnScoutGroupMember.length; i++) {
        const element = gridItemTwoColumnScoutGroupMember[i];
        element.style.backgroundColor = 'white';
        element.style.color = 'black'
      }
    } else if (pageName.value == 'contact') {
      let contactUsImage = document.getElementById('contact_us_image');
      let singleTextArea = document.querySelector('textarea');
      singleTextArea.style.backgroundColor = 'white';
      singleTextArea.style.color = 'black';
      contactUsImage.src = '/images/contact_us/contact-us-1908763_1920.png'
    } else if (pageName.value == 'calendar_2021_2022') {
      let calendarTableFull = document.querySelectorAll('.calendar_table_full');
      let calendarTableSmall = document.querySelectorAll('.calendar_table_small')
      let calendarMonth = document.querySelector("#calendar_month");
      calendarMonth.style.backgroundColor = 'white'
      calendarMonth.style.color = 'black'
      calendarTableFull.forEach(e => {
        e.classList.remove('table-dark')
      });
      calendarTableSmall.forEach(e => {
        e.classList.remove('table-dark')
      });
    }else if(pageName.value == 'scout_group_annoncements'){
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let gridContainerTwoColumnArticle = document.querySelector('.grid_container_two_column_article');
      gridContainerTwoColumnArticle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
    }
  } else {
    darkMode = true;
    darkLightModeButton.firstChild.classList.remove('fa-moon')
    darkLightModeButton.firstChild.classList.add('fa-sun')
    darkLightModeButton.title = 'Light Mode'
    mainBody.style.backgroundColor = "rgb(32, 32, 32)";
    second_column.style.backgroundColor = "rgb(24, 24, 24)";
    mainBody.style.color = "white"
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.style.backgroundColor = "rgb(32, 32, 32)"
      element.style.color = "white"
    }
    body.style.background = `linear-gradient(
      to bottom,
      rgb(0, 0, 0) 5%,
      rgb(79, 105, 136) 100%
    )`;
    siteTitle.style.background = "rgb(32, 32, 32)"
    siteTitle.style.color = "red";
    if (pageName.value == 'index') {
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let homeArticles = document.querySelectorAll(".home_article");
      homeArticles.forEach(e => {
        e.classList.add("bg-dark");
        e.classList.add('text-white');
      });
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
      }
    } else if (pageName.value == 'scout_group_members') {
      let gridItemTwoColumnScoutGroupMember = document.getElementsByClassName("grid_item_two_column_scout_group_members")
      let gridContainerTwoColumnScoutGroupMember = document.querySelector(".grid_container_two_column_scout_group_members");
      gridContainerTwoColumnScoutGroupMember.style.backgroundColor = 'rgb(32, 32, 32)';
      for (let i = 0; i < gridItemTwoColumnScoutGroupMember.length; i++) {
        const element = gridItemTwoColumnScoutGroupMember[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
        element.style.color = 'white'
      }
    } else if (pageName.value == 'contact') {
      let contactUsImage = document.getElementById('contact_us_image');
      let singleTextArea = document.querySelector('textarea');
      singleTextArea.style.backgroundColor = 'rgb(32, 32, 32)';
      singleTextArea.style.color = 'white';
      contactUsImage.src = '/images/contact_us/contact-us-1908763_1920_dark.png'
    } else if (pageName.value == 'calendar_2021_2022') {
      let calendarTableFull = document.querySelectorAll('.calendar_table_full');
      let calendarTableSmall = document.querySelectorAll('.calendar_table_small');
      let calendarMonth = document.querySelector("#calendar_month");
      calendarMonth.style.backgroundColor = 'rgb(32, 32, 32)'
      calendarMonth.style.color = 'white'
      calendarTableFull.forEach(e => {
        e.classList.add('table-dark')
      });
      calendarTableSmall.forEach(e => {
        e.classList.add('table-dark')
      });
    }else if(pageName.value == 'scout_group_annoncements'){
      let gridItemTwoColumnArticle = document.getElementsByClassName('grid_item_two_column_article');
      let gridContainerTwoColumnArticle = document.querySelector('.grid_container_two_column_article');
      gridContainerTwoColumnArticle.style.backgroundColor = 'rgb(32, 32, 32)';
      for (let i = 0; i < gridItemTwoColumnArticle.length; i++) {
        const element = gridItemTwoColumnArticle[i];
        element.style.backgroundColor = 'rgb(32, 32, 32)';
      }
    }
  }
}

darkLighModeOnLoad();

showSideNavButton.addEventListener('click', function () {
  let first_column = document.querySelector(".first_column");
  let second_column = document.querySelector(".second_column")
  if (showSideNav) {
    showSideNav = false;
    sessionStorage.setItem("showSideNavNew", JSON.stringify(showSideNav));
    first_column.style.display = "block"
    second_column.classList.remove('col-md-12')
    second_column.classList.add('col-md-9')
    showSideNavButton.firstChild.classList.remove('fa-eye')
    showSideNavButton.firstChild.classList.add('fa-eye-slash')
    showSideNavButton.title = 'Κρύψε την αριστερή πλαινή μπάρα'
  } else {
    showSideNav = true;
    sessionStorage.setItem("showSideNavNew", JSON.stringify(showSideNav));
    first_column.style.display = "none"
    second_column.classList.remove('col-md-9')
    second_column.classList.add('col-md-12')
    showSideNavButton.firstChild.classList.remove('fa-eye-slash')
    showSideNavButton.firstChild.classList.add('fa-eye')
    showSideNavButton.title = 'Εμφάνισε την αριστερή πλαινή μπάρα'
  }
})

let showSideNavNew = JSON.parse(window.sessionStorage.getItem("showSideNavNew"));

function showSideNavOnLoad() {
  let first_column = document.querySelector(".first_column");
  let second_column = document.querySelector(".second_column")
  let pageName = document.querySelector(".page_name")
  if (pageName.value == 'calendar') {
    showSideNavNew = true;
    showSideNavButton.disabled = "disabled"
  }
  if (!showSideNavNew) {
    showSideNav = false;
    sessionStorage.setItem("showSideNavNew", JSON.stringify(showSideNav));
    first_column.style.display = "block"
    second_column.classList.remove('col-md-12')
    second_column.classList.add('col-md-9')
    showSideNavButton.firstChild.classList.remove('fa-eye')
    showSideNavButton.firstChild.classList.add('fa-eye-slash')
    showSideNavButton.title = 'Κρύψε την αριστερή πλαινή μπάρα'
  } else {
    showSideNav = true;
    sessionStorage.setItem("showSideNavNew", JSON.stringify(showSideNav));
    first_column.style.display = "none"
    second_column.classList.remove('col-md-9')
    second_column.classList.add('col-md-12')
    showSideNavButton.firstChild.classList.remove('fa-eye-slash')
    showSideNavButton.firstChild.classList.add('fa-eye')
    showSideNavButton.title = 'Εμφάνισε την αριστερή πλαινή μπάρα'
  }
}

showSideNavOnLoad()