const hoursFirstContent = [
    ...document.querySelectorAll(".hours-first-content .hours-number"),
  ],
  hoursSecondContent = [
    ...document.querySelectorAll(".hours-second-content .hours-number"),
  ],
  minutesFirstContent = [
    ...document.querySelectorAll(".minutes-first-content .minutes-number"),
  ],
  minutesSecondContent = [
    ...document.querySelectorAll(".minutes-second-content .minutes-number"),
  ],
  secondsFirstContent = [
    ...document.querySelectorAll(".seconds-first-content .seconds-number"),
  ],
  secondsSecondContent = [
    ...document.querySelectorAll(".seconds-second-content .seconds-number"),
  ];

const temps = document.querySelector(".time");

function clock() {
  const time = new Date();

  let h = time.getHours().toString();
  h < 10 ? (h = `0${h}`) : h;

  let m = time.getMinutes().toString();
  m < 10 ? (m = `0${m}`) : m;

  let s = time.getSeconds().toString();
  s < 10 ? (s = `0${s}`) : s;

  function changeTime(tempsElement, firstContent, SecondContent) {
    let firstIndexToRemove = firstContent.findIndex((first_Content) =>
      first_Content.classList.contains("active-nb")
    );
    let SecondIndexToRemove = SecondContent.findIndex((Second_Content) =>
      Second_Content.classList.contains("active-nb")
    );

    firstContent[firstIndexToRemove].classList.remove("active-nb");
    firstContent[tempsElement[0]].classList.add("active-nb");

    SecondContent[SecondIndexToRemove].classList.remove("active-nb");
    SecondContent[tempsElement[1]].classList.add("active-nb");
  }

  changeTime(h, hoursFirstContent, hoursSecondContent);
  changeTime(m, minutesFirstContent, minutesSecondContent);
  changeTime(s, secondsFirstContent, secondsSecondContent);

  temps.textContent = `${h} : ${m} : ${s}`;
}

setInterval(() => {
  clock();
}, 0);
