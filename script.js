function addCountry() {
  var countryInput = document.getElementById("countryInput");
  var country = countryInput.value.trim();

  if (country !== "") {
    var ul = document.getElementById("countryList");
    var li = document.createElement("li");
    li.textContent = country;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
    countryInput.value = "";
  }
}



//* Practice 1//

// let fullName = prompt("please enter full name wihtout spaces");

// let userName = "@" + fullName + fullName.length;
// console.log(userName)

//* practice 2//

let items = [250, 645, 300, 900, 50];
let i=0;
for(let val of items){
  let offer = val / 10;
  items[i] -= offer;
  console.log(`Value of items after offer is ${items[i]}`); 
  i++;
}