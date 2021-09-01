"use strict"
let thisPage = document.querySelector(".page_name");

if (thisPage.value == "articles_cubs_home") {
  const articlesCubsYear = document.getElementById("articles_cubs_year");
  const articlesCubsMonth = document.getElementById("articles_cubs_month");
  const articlesCubs20212022 = document.getElementById("articles_cubs_2021_2022");
  const articlesCubs20212022Months = articlesCubs20212022.children;
  const articlesCubs20222023 = document.getElementById("articles_cubs_2022_2023");
  const articlesCubs20222023Months = articlesCubs20222023.children;
  function loopThroughMonthDisplayNone(z) {
    for (let i = 0; i < z.length; i++) {
      let element = z[i];
      element.style.display = "none";
    }
  }

  function monthSwitching(x, y) {
    switch (x.value) {
      case "september":
        loopThroughMonthDisplayNone(y);
        y[0].style.display = "block";
        break;
      case "october":
        loopThroughMonthDisplayNone(y);
        y[1].style.display = "block";
        break;
      case "november":
        loopThroughMonthDisplayNone(y);
        y[2].style.display = "block";
        break;
      case "december":
        loopThroughMonthDisplayNone(y);
        y[3].style.display = "block";
        break;
      case "january":
        loopThroughMonthDisplayNone(y);
        y[4].style.display = "block";
        break;
      case "february":
        loopThroughMonthDisplayNone(y);
        y[5].style.display = "block";
        break;
      case "march":
        loopThroughMonthDisplayNone(y);
        y[6].style.display = "block";
        break;
      case "april":
        loopThroughMonthDisplayNone(y);
        y[7].style.display = "block";
        break;
      case "may":
        loopThroughMonthDisplayNone(y);
        y[8].style.display = "block";
        break;
      case "june":
        loopThroughMonthDisplayNone(y);
        y[9].style.display = "block";
        break;
      case "july":
        loopThroughMonthDisplayNone(y);
        y[10].style.display = "block";
        break;
      case "august":
        loopThroughMonthDisplayNone(y);
        y[11].style.display = "block";
        break;
      default:
        break;
    }
  }
  [articlesCubsYear, articlesCubsMonth].forEach(function (element) {
    element.addEventListener("change", function () {
      if (articlesCubsYear.value == "2021-2022") {
        articlesCubs20222023.style.display = "none";
        articlesCubs20212022.style.display = "block";
        monthSwitching(articlesCubsMonth, articlesCubs20212022Months);
      }
      if (articlesCubsYear.value == "2022-2023") {
        articlesCubs20212022.style.display = "none";
        articlesCubs20222023.style.display = "block";
        monthSwitching(articlesCubsMonth, articlesCubs20222023Months);
      }
    });
  });
};

// https://via.placeholder.com/400x400