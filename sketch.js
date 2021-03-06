var title, titleimg;
var nnbutton, nnbuttonimg;
var nnbutton2, nnbutton2img;
var titleGroup;
var inp;
var inp2;
var addressinp;
var mapButton;
var mapIMG;
var plswork = false;
var sel1;
var sel2;
var finalPin3;
var finalPin2;
var finalPin;
var sel3;
var nextIMG;
var nextButton;
var canvas;
var UPCITIES;
var dropzone;
var droppedFile;
let item5
var inp3;
var submitIMG;
var submit;
var shouldWork = false;
var shouldWork2 = false;
var sendimg;
var title0;
var title0Img;
var truecolor = {
  r: 0,
  g: 0,
  b: 0
};

function getFile(file) {
  img = createImg(file.data);
  localStorage.setItem("img", file.data);
  img.size(50, 50);
  image(img, 0, 0, width, height);
  dropzone.child(img);
  droppedFile = createElement('div');
  droppedFile.addClass('droppedFile');
  droppedFile.style('background', '#ccc');
  droppedFile.child(img).parent(dropzone);
  droppedFile.mouseOver(highlightFile);
  droppedFile.mouseOut(unhighlightFile);
}

function highlight() {
  dropzone.style('background', '#ddd');
}

function highlightFile() {
  droppedFile.style('background', '#ddd');
}

function unhighlight() {
  dropzone.style('background', '#f1f1f1');
}

function unhighlightFile() {
  droppedFile.style('background', '#ccc');
}

function mousePressed() {
  removeElements();
}

function preload() {

  titleimg = loadImage("title.png");
  nnbuttonimg = loadImage("nnbutton1.png")
  nnbutton2img = loadImage("nnbutton2.png")
  title0Img = loadImage("output-onlinepngtools (16).png")
  mapIMG = loadImage("download.png")
  nextIMG = loadImage("575-5752599_transparent-background-next-button-clipart.png")
  submitIMG = loadImage("a5bcdd47a1cded2da258ace8bbe7f1ec.jpg")

}

function setup() {

  inp3 = createInput('', 'text').attribute('placeholder', 'Description');
  inp3.attribute('maxlength', '500')
  inp3.attribute('word-break', 'break-word')
  inp3.input(myInputEvent5);
  inp3.hide()

  inp3.position(200, 250)

  function myInputEvent5() {
    inp3.changed(checkDecDigits);
  }
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(getFile, unhighlight);
  dropzone.hide()
  nextButton = createSprite(500, 705)
  nextButton.addAnimation("nextimg", nextIMG)
  nextButton.scale = 0.2
  nextButton.visible = false;
  submit = createSprite(400, 750, 50, 50)
  submit.addAnimation("submitIMG", submitIMG)
  submit.scale = 0.3
  submit.visible = false
  mapbutton = createSprite(250, 700, 10, 10);
  mapbutton.addAnimation("mapbutton", mapIMG)
  mapbutton.scale = 0.5
  mapbutton.visible = false;


  addressinp = createInput('', 'text').attribute('placeholder', 'Address');
  addressinp.input(myInputEvent2);
  addressinp.hide()

  function myInputEvent2() {

    console.log('you are typing: ', this.value().length);
    addressinp.changed(checkADDigits);
  }

  inp2 = createInput('', 'text').attribute('placeholder', 'Mobile Number');
  inp2.attribute('maxlength', '13')
  inp2.input(myInputEvent1);
  inp2.hide()

  function myInputEvent1() {
    textSize(20)
    text("Address:", 200, 525)
    addressinp.show();
    mapbutton.visible = true
    addressinp.position(200, 550)
    console.log('you are typing: ', this.value().length);
    inp2.changed(checkTelDigits);
  }
  inp2.mousePressed(resetValue2)
  inp = createInput('', 'text').attribute('placeholder', 'PIN CODE');
  inp.attribute('maxlength', '6')
  inp.input(myInputEvent);
  inp.hide();
  inp.changed(checkPinDigits);

  function myInputEvent() {
    console.log('you are typing: ', this.value().length);
    textSize(20)
    text("Mobile Number:", 200, 425)
    inp2.show()
    inp2.position(200, 450)
  }
  inp.mousePressed(resetValue)
  titleGroup = new Group();
  var canvas = createCanvas(800, 800);
  title0 = createSprite(420, 200, 200, 800)
  title0.addAnimation("title0", title0Img)
  title = createSprite(350, 580, 200, 800);
  title.addAnimation("title2", titleimg)
  title.visible = true;
  titleGroup.add(title)
  nnbutton = createSprite(308, 635, 160, 600);
  nnbutton.addAnimation("nnbbutton", nnbuttonimg)
  nnbutton.scale = 0.75

  nnbutton2 = createSprite(308, 708, 200, 600);
  nnbutton2.addAnimation("nnbbutton2", nnbutton2img)
  nnbutton2.scale = 0.75

  inp2.size(500, 50)
  addressinp.size(500, 50)

}

function draw() {

  if (mousePressedOver(nnbutton)) {
    screenNN();

  }
  if (mousePressedOver(mapbutton)) {
    getLocation()
    nextButton.visible = true;
  }
  if (mousePressedOver(nextButton)) {
    lastScreeNN()
    sel1.hide();
  }

  if (mousePressedOver(submit) && submit.visible === true && shouldWork === true && shouldWork2 === true) {

    something()
    something()

  }
  drawSprites();

}


function screenNN() {

  createStateDropDown()
  text("FILL YOUR DETAILS", 200, 50)
  // pinCodeInput()
  title.visible = false;
  nnbutton.visible = false;
  nnbutton2.visible = false;
  title0.visible = false;
}

function createStateDropDown() {
  background(200);

  textSize(20)




  sel1 = createSelect();
  sel1.position(200, 150);

  sel1.size(500, 50)
  sel1.option('State');
  sel1.option('UP');
  sel1.option('Delhi');


  sel1.selected('State');
  sel1.changed(mySelectEvent);

  sel1.show()


}

function mySelectEvent() {
  let item = sel1.value();

  if (item === 'UP') {
    UPCITIES = ["Lucknow", "Ghaziabad"]
    cityUPDropDown()

  } else if (item === 'Delhi') {
    UPCITIES = ["North", "South"]
    cityUPDropDown()
  }



}

function hide() {
  sel1.hide()
}

function cityUPDropDown() {

  sel2 = createSelect();
  sel2.position(200, 250);
  sel2.size(500, 50)

  sel2.option('City');
  sel2.option(UPCITIES[0]);
  sel2.option(UPCITIES[1]);
  sel2.selected('City');
  sel2.changed(mySelectEvent1);

  function mySelectEvent1() {
    let item1 = sel2.value();
    pinCodeInput();
  }
}

function pinCodeInput() {
  inp.position(200, 350)
  inp.show()
  inp.size(500, 50)
  textSize(20)
  text("PIN CODE:", 200, 325)
  console.log(this.inp.value.length)
}

function checkPinDigits() {
  if (inp.value().length > 6 || inp.value().length < 6 || isNaN(inp.value())) {
    inp.value('pls type a 6 digit pin code and no text only numbrs')
  }

}

function checkTelDigits() {
  if (inp2.value().length > 13 || inp2.value().length < 13 || isNaN(inp2.value())) {
    inp2.value('pls type a 13 digit mobile number starting with +91 with numbers only no text')
  }

  if (!inp2.value().includes("+91")) {
    inp2.value("telephone number must start with +91")
  }
  console.log(inp2.value())
}

function checkADDigits() {
  if (addressinp.value().length > 300) {
    addressinp.value('address should be less than 300 letters')
  } else {
    nextButton.visible = true
  }

}



var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

async function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude)
  var address = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=9168c0f48a994c788545da419c540f6a&q=${position.coords.latitude},${position.coords.longitude}&pretty=1`);
  var response = await address.json()
  var finalAddress = response.results[0].formatted







  addressinp.value(finalAddress)
}

function resetValue() {
  inp.value("")
}

function resetValue2() {
  inp2.value("")
}


function lastScreeNN() {
  if (inp.value() === 'pls type a 6 digit pin code and no text only numbrs' || inp2.value() === "telephone number must start with +91" || addressinp.value() === "address should be less than 300 letters" || addressinp.value() === "" || inp.value() === "" || inp2.value() === "") return;
  finalPin = `Pin Code: ${inp.value()}`
  console.log(finalPin)
  finalPin2 = `Mobile No.: ${inp2.value()}`
  finalPin3 = `Address: ${addressinp.value()}`

  background(200)
  inp.hide()
  inp2.hide()
  addressinp.hide()
  sel1.hide()
  sel2.hide();
  mapbutton.visible = false;
  nextButton.visible = false;



  show3rdScreen()


}

function show3rdScreen() {

  inp3.show()
  makeThirdSel()
  dropzone.show()
  dropzone.position(400, 570)
  dropzone.size(100, 25)
  submit.visible = true;
  inp3.size(500, 250)


}

function checkDecDigits() {
  if (inp3.value().length > 500) {
    addressinp.value('descreption should be less than 500 letters')
  } else {
    shouldWork = true;
  }

}

function makeThirdSel() {
  sel1.hide()
  sel3 = createSelect();
  sel3.position(200, 150);
  sel3.size(500, 50)

  sel3.option('Related to');
  sel3.option('Garbage issue');
  sel3.option(`Related to Rods`);
  sel3.option(`Related to water flogging`);
  sel3.option(`other`);
  sel3.selected('Related to');
  shouldWork2 = false;
  sel3.changed(mySelectEvent5);
  sel3.show()

  function mySelectEvent5() {
    item5 = sel3.value();
    shouldWork2 = true;

  }
}
var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      var finalItem = `Problem: ${item5}`
      var finaldesc = `Problem ${inp3.value()}`
      var y = localStorage.getItem("img");
      document.getElementById("demo2").innerHTML = y;
      Email.send({
        Host: "smtp.gmail.com",
        Username: "agrimagwarwal@gmail.com",
        Password: "Baba@amma1",
        To: 'agrim310108@gmail.com',
        From: "agrimagarwal@gmail.com",
        Subject: "Complain letter",
        Body: `${finalPin} ${finalPin2} ${finalPin3} ${finalItem} ${finaldesc}`,

      }).then(
        message => alert("Your Complaint has been sent")
      );



    }
  }
})()
