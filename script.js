 let put = document.querySelector(".put");
      let result = document.querySelector(".result");
      let ac = document.getElementById("ac");
      let back = document.getElementById("back");
      let cal = document.getElementById("cal");
      let equal = document.getElementById("equal");

      put.value = "";

      equal.addEventListener("click", (e) => {
        e.stopPropagation();
        put.value = eval(put.value);
      });
      ac.addEventListener("click", (e) => {
        e.stopPropagation();
        put.value = "";
        result.value = 0;
      });

      back.addEventListener("click", (e) => {
        e.stopPropagation();
        put.value = put.value.substring(0, put.value.length - 1);
        if (put.value == "") {
          result.value = 0;
        } else {
          result.value = eval(put.value);
        }
      });

      cal.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
          let oldVlaue = put.value;
          let op = ["+", "-", "*", "/"];
          if (
            (oldVlaue == "" && event.target.innerText == "/") ||
            (oldVlaue == "" && event.target.innerText == "*") ||
            (oldVlaue == "" && event.target.innerText == ")")
          ) {
            put.value += event.target.innerText;
            result.value = "error";
          } else if (
            op.includes(oldVlaue.charAt(oldVlaue.length - 1)) &&
            op.includes(event.target.innerText)
          ) {
            let newValue = oldVlaue.slice(0, oldVlaue.length - 1);
            put.value = newValue + event.target.innerText;
          } else {
            put.value += event.target.innerText;
            result.value = eval(put.value);
          }
        }
      });