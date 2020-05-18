const garage = [];
const totalPrice = [];
const maxCars = 15;

$(document).ready(function () {
   if (garage.length == maxCars) {
      alert("No more room in garage!");
      $("form input").prop("disabled", true);
      $("button").prop("disabled", true);
   }
});

$("#submitCar").click(function () {
   let yearInput = $("#carYear").val();
   let makeInput = $("#carMake").val();
   let modelInput = $("#carModel").val();
   let imageInput = $("#carImage").val();
   let priceInput = $("#carPrice").val();

   if (garage.length == maxCars) {
      alert("No more room in garage!");
   } else if (
      yearInput.length == 0 ||
      makeInput.length == 0 ||
      modelInput.length == 0 ||
      imageInput.length == 0 ||
      priceInput.length == 0
   ) {
      alert("Must fill in all fields.");
      return;
   } else {
      newCar(yearInput, makeInput, modelInput, imageInput, priceInput);
      $("html, body").animate({ scrollTop: $(document).height() }, 6000);
   }
});

function newCar(yearInput, makeInput, modelInput, imageInput, priceInput) {
   console.log(
      "in newCar:",
      yearInput,
      makeInput,
      modelInput,
      imageInput,
      priceInput
   );
   const newCarObject = {
      year: yearInput,
      make: makeInput,
      model: modelInput,
      image: imageInput,
      price: priceInput,
   };
   garage.push(newCarObject);
   totalPrice.push(newCarObject.price);
   $("#garageList").append(
      "<li>" +
         newCarObject.year +
         " " +
         newCarObject.make +
         " " +
         newCarObject.model +
         " " +
         newCarObject.price +
         " USD " +
         '<img src="' +
         newCarObject.image +
         '" alt="" />' +
         "</li>"
   );
   let priceTotal = totalPrice.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
   }, 0);
   $("#totalPrice").text(priceTotal + " USD");
   return true;
}

newCar(
   "1991",
   "Ford",
   "Explorer",
   "https://cnet3.cbsistatic.com/img/_BJZQrS88tQcpTkHSfqgheyMpCA=/1200x675/2019/01/08/166e51f0-3170-4caf-8c31-5add0218a03e/explorer-main-ogi.jpg",
   "1600"
);

newCar(
   "1965",
   "Ford",
   "Mustang",
   "https://d32c3oe4bky4k6.cloudfront.net/-/media/uscamediasite/images/story-images/2019/06/26/65-mustang(3).ashx?modified=20190626133926",
   "5500"
);

newCar(
   "1994",
   "Ford",
   "SHO",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmdt4k4vqxd85r5Hcn2xV4yP37oHgb5nbK5zh-AxivcOSO9dqW&usqp=CAU",
   "2000"
);

newCar(
   "1972",
   "Chevrolet",
   "Monte Carlo",
   "https://cdn.dealeraccelerate.com/ccl/1/2704/68544/790x1024/1972-chevrolet-monte-carlo",
   "2500"
);

newCar(
   "1994",
   "Ford",
   "F-150",
   "https://cdn.dealeraccelerate.com/fastlane/1/851/33142/1920x1440/1994-ford-f150-xlt",
   "1500"
);

newCar(
   "2003",
   "Pontiac",
   "Grand Prix",
   "https://www.aservicemanualpdf.com/wp-content/uploads/edd/2017/09/SM-1997-2003-PONTIAC-GRAND-PRIX-Service-Repair.jpg",
   "6000"
);

newCar(
   "1988",
   "Ford",
   "F-150",
   "https://www.primoclassicsllc.com/galleria_images/553/553_main_l.jpg",
   "500"
);

newCar(
   "1988",
   "GMC",
   "Suburban",
   "https://cdn.dealeraccelerate.com/fwc/1/306/22226/1920x1440/1988-gmc-suburban",
   "800"
);

newCar(
   "1991",
   "Ford",
   "F-150",
   "https://i.pinimg.com/736x/4b/72/b3/4b72b3a55adf03fc1f56d26cdce1a814.jpg",
   "1800"
);
