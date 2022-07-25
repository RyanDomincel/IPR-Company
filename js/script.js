window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);
});

// Plans function
function chooseStarter(n) {
  switch (n) {
    case "Starter":
      document.getElementById("packageType").value = "starter";
      break;

    case "Premium":
      document.getElementById("packageType").value = "premium";

      break;
    default:
      document.getElementById("packageType").value = "business";
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  window.addEventListener("load", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = this.document.getElementsByClassName("needs-validation");
    var buttonToModal2 = this.document.getElementById("buttonToModal2");
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        buttonToModal2.setAttribute("data-bs-toggle", "modal");
        buttonToModal2.setAttribute("data-bs-target", "#modal2");
        form.classList.add("was-validated");
      });
    });
  });
})();

// For Modal Country portion
var stateObject = {
  Canada: {
    Alberta: ["Edmonton", "Beaumont"],
    Columbia: ["Anza", "Campamento"],
  },
  India: {
    Gujrat: ["Surat", "Rajkot"],
    Kerala: ["Kozhikode", "Malappuram"],
    Goa: ["East Goa 1", "west Goa 2"],
  },
  Philippines: {
    "Lanao del Norte": ["Kapatagan", "Iligan", "Tubod"],
    "Lanao del Sur": ["Maigo", "Lala", "Baroy"],
  },
};
window.onload = function () {
  var selectCountryList = document.getElementById("selectCountryList"),
    selectStateList = document.getElementById("selectStateList"),
    selectCityList = document.getElementById("selectCityList");
  for (var country in stateObject) {
    selectCountryList.options[selectCountryList.options.length] = new Option(
      country
    );
  }
  selectCountryList.onchange = function () {
    selectStateList.length = 1;
    selectCityList.length = 1;
    if (this.selectedIndex < 1) return;
    console.log(this.selectedIndex < 1);
    for (var state in stateObject[this.value]) {
      selectStateList.options[selectStateList.options.length] = new Option(
        state,
        state
      );
      console.log(stateObject[this.value]);
    }
  };
  selectCountryList.onchange();
  selectStateList.onchange = function () {
    selectCityList.length = 1;
    if (this.selectedIndex < 1) return;
    var city = stateObject[selectCountryList.value][this.value];
    console.log(city);
    for (var i = 0; i < city.length; i++) {
      selectCityList.options[selectCityList.options.length] = new Option(
        city[i],
        city[i]
      );
    }
  };
};

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "Ivan@IPR.com",
    Password: "3B93D9287490A3783048C266BE1B94B220DF",
    To: "domincelr@gmail.com",
    From: "domincelr@gmail.com",
    Subject: "Newsletter Message",
    Body:
      "Name: " +
      document.getElementById("name-contact-us").value +
      "<br> Email: " +
      document.getElementById("email-contact-us").value +
      "<br> Contact Number: " +
      document.getElementById("phone-contact-us").value +
      "<br> Message: " +
      document.getElementById("message-contact-us").value,
  }).then((message) => alert("Message Delivered!"));
}
AOS.init();
