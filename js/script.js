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
      document.getElementById("packageType").value = "Starter";
      break;

    case "Premium":
      document.getElementById("packageType").value = "Premium";

      break;
    default:
      document.getElementById("packageType").value = "Business";
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  window.addEventListener("load", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    var buttonToModal2 = document.getElementById("buttoNToModal2");

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          var selectedPackage = document.getElementById("packageType").value;
          var firstName = document.getElementById("validationCustom01").value;
          var lastName = document.getElementById("validationCustom02").value;
          var fbName = document.getElementById("validationCustom03").value;
          var comapnyName = document.getElementById("validationCustom04").value;
          var emailAdd = document.getElementById("validationCustom07").value;

          var address = document.getElementById("validationCustom05").value;
          var selectedCountry =
            document.getElementById("selectCountryList").value;
          var selectedState = document.getElementById("selectStateList").value;
          var selectedCity = document.getElementById("selectCityList").value;
          var zipCode = document.getElementById("zipcode").value;

          var nameOnCard = document.getElementById("namecard").value;
          var cardNumber = document.getElementById("validationCustom12").value;
          var cardCvv = document.getElementById("cvv").value;
          var exDate = document.getElementById("date-expiration").value;

          event.preventDefault();
          event.stopPropagation();
          buttonToModal2.setAttribute("data-bs-toggle", "modal");
          buttonToModal2.setAttribute("data-bs-target", "#modal2");
          document.getElementById("package-modal-2").innerHTML =
            selectedPackage;
          document.getElementById("fullname-modal-2").innerHTML =
            firstName + " " + lastName;
          document.getElementById("fbname-modal-2").innerHTML = fbName;
          document.getElementById("company-modal-2").innerHTML = comapnyName;
          document.getElementById("email-modal-2").innerHTML = emailAdd;
          document.getElementById("address-modal-2").innerHTML =
            address +
            " , " +
            selectedCity +
            ", " +
            selectedState +
            ", " +
            selectedCountry +
            " " +
            zipCode;
          document.getElementById("namecard-modal-2").innerHTML = nameOnCard;
          document.getElementById("cardnum-modal-2").innerHTML = cardNumber;
          document.getElementById("expdate-modal-2").innerHTML = exDate;
          document.getElementById("cvv-modal-2").innerHTML = cardCvv;
        }
      });
    });
  });
})();

function removeDataBs() {
  var buttonToModal2 = document.getElementById("buttoNToModal2");
  buttonToModal2.removeAttribute("data-bs-toggle");
  buttonToModal2.removeAttribute("data-bs-target");
}

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
