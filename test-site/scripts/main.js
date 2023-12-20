

document.querySelector("img").addEventListener("click", function () {
    alert("れありです。よろしくお願いします。");
  });

  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rearidayo.png") {
    myImage.setAttribute("src", "images/yukkurisitettene.png");
  } else {
    myImage.setAttribute("src", "images/rearidayo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、れあり はかわいいよ。`;
  }if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `れあり はかわいいよ、${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} さん、れあり はかわいいよ。`;
    }
  }
  