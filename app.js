const body = document.querySelector("body");

// console.log(active);
body.style.fontFamily = "Montserrat', sans-serif";
body.style.padding = "0";
body.style.margin = "0";
let ul = document.createElement("ul");
let li;

li = document.createElement("li");
li.style.padding = "10px 20px";
li.className = "home";
li.textContent = "Home";
ul.appendChild(li);

li = document.createElement("li");
li.className = "about";
li.textContent = "About";
li.style.padding = "10px 20px";
ul.appendChild(li);

li = document.createElement("li");
li.className = "services";
li.textContent = "Services";
li.style.padding = "10px 20px";
ul.appendChild(li);

li = document.createElement("li");
li.className = "contact";
li.textContent = "Contact";
li.style.padding = "10px 20px";
ul.appendChild(li);

li = document.createElement("li");
li.className = "blog";
li.textContent = "Blog";
li.style.padding = "10px 20px";
ul.appendChild(li);
body.appendChild(ul);

ul.style.display = "flex";
ul.style.justifyContent = "flex-start";
ul.style.alignItems = "center";
ul.style.background = "#f3f3f3";
ul.style.listStyle = "none";
ul.style.margin = "0";

li = ul.childNodes;
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    let act = document.querySelector(".active");
    act.className = act.className.replace("active", "");
    this.className += "active";
  });
}

let input = document.createElement("input");
body.appendChild(input);
input.setAttribute("type", "password");
