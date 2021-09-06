"use strict"

if (thisPage.value == "calendar_2021_2022") {
  const calendarMonth = document.getElementById("calendar_month");
  const calendars2021_2022 = document.querySelectorAll(".calendar_2021-2022_month");
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
  calendarMonth.addEventListener("change", function(){
    monthSwitching(calendarMonth,calendars2021_2022);
  })
  monthSwitching(calendarMonth,calendars2021_2022);
}

