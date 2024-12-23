let tt_cy = document.querySelector(".tt-cy");
let cy_tt = document.querySelector(".cy-tt");
let container_text = document.querySelector(".mn-tt-pp");
let left = document.querySelector("#left");
let bottom = document.querySelector("#bottom");
let Warning = document.querySelector("#Warning");
let sw_tt = document.querySelector(".sw-tt");
let leftValue = "Left";
let bottomValue = "Bottom";
let warningvalue = "Warning";

left.addEventListener("change", () => {
  leftValue = left.value;
  console.log("I am left value", leftValue);
});

bottom.addEventListener("change", () => {
  bottomValue = bottom.value;
  console.log("I am bottom value", bottomValue);
});

Warning.addEventListener("change", () => {
  warningvalue = Warning.value;
  console.log("I am Warning Value", warningvalue);
});

tt_cy.addEventListener("input", () => {
  let store = tt_cy.value;
  cy_tt.innerText = store;
});

sw_tt.addEventListener("click", () => {
  container_text.classList.remove(
    "warning-left-top",
    "warning-left-bottom",
    "warning-right-top",
    "warning-right-bottom",
    "message-left-top",
    "message-left-bottom",
    "message-right-top",
    "message-right-bottom"
  );

  let newClass = "";
  if (warningvalue == "Warning") {
    if (leftValue == "Left" && bottomValue == "Top") {
      newClass = "warning-left-top";
    } else if (leftValue == "Left" && bottomValue == "Bottom") {
      newClass = "warning-left-bottom";
    } else if (leftValue == "right" && bottomValue == "Top") {
      newClass = "warning-right-top";
    } else if (leftValue == "right" && bottomValue == "Bottom") {
      newClass = "warning-right-bottom";
    }
  } else if (warningvalue == "Message") {
    if (leftValue == "Left" && bottomValue == "Top") {
      newClass = "message-left-top";
    } else if (leftValue == "Left" && bottomValue == "Bottom") {
      newClass = "message-left-bottom";
    } else if (leftValue == "right" && bottomValue == "Top") {
      newClass = "message-right-top";
    } else if (leftValue == "right" && bottomValue == "Bottom") {
      newClass = "message-right-bottom";
    }
  }

  if (newClass) {
    container_text.classList.add(newClass);
    container_text.classList.remove("hideMe");
  }

  let displayTime = parseInt(document.querySelector("#range").value) * 1000 || 3000;
  setTimeout(() => {
    container_text.classList.add("hideMe");
  }, displayTime);
});

