const memeForm = document.querySelector("form");
const memeImg = document.querySelector("#subUrl");
const memeTop = document.querySelector("#topText");
const memeBot = document.querySelector("#bottomText");
const memeLocation = document.querySelector("#memeSpot");



memeForm.addEventListener("submit", function(e){
    e.preventDefault(e);
    const newMeme = document.createElement("div");
    const newImg = document.createElement("img");
    const textTop = document.createElement("div");
    const textBot = document.createElement("div");
    const removeBtn = document.createElement("button");

    newImg.src = memeImg.value;

    textTop.classList.add("textTop");
    textTop.innerHTML = memeTop.value;

    textBot.classList.add("textBot");
    textBot.innerHTML = memeBot.value;

    removeBtn.innerHTML = "Bye Bye Meme!";
    removeBtn.addEventListener("click", function(e){
        e.target.parentElement.remove();
    });

    newMeme.classList.add("meme");
    newMeme.append(newImg);
    newMeme.append(textTop);
    newMeme.append(textBot);
    newMeme.append(removeBtn);

    memeLocation.append(newMeme);

    memeForm.reset();
})