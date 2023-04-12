document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;
//Items



//Main character
const mainCharacter = document.getElementById("mainCharacter");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
let inventory = [];
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {
    if (counterSpeech.style.opacity == 0 && mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);

        switch (e.target.id) {
            case "door1":
                //something insert here
                if (checkItem("rusty key")) {
                    counterPortrait.src = "img/Groot.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "This key fits and it's open now..");
                    setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "Wait what?! Who are you?.");
                    setTimeout(showMessage, 8 * sec, counterSpeech, counterAudio, "i am groot");
                    setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "oh hey groot its me mario");
                    setTimeout(showMessage, 16 * sec, counterSpeech, counterAudio, "I AM GROOT");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
                } else if (!checkItem("random key")) {
                    counterPortrait.src = "img/portairDoor.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(counterSpeech, counterAudio, "I'm trapped! you can help me by finding the key... its in the jar on the right.");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 4 * sec);
                } else if (checkItem("random key")) {
                    counterPortrait.src = "img/portairDoor.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "This key doesn't even fit, im gonna back to that jar");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 4 * sec);
                }
                else {
                    counterPortrait.src = "img/portairDoor.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(counterSpeech, counterAudio, "I'm trapped! you can help me by finding the key... its in the jar on the right.");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 4 * sec);
                }
                break;
            case "signToLeft":
                //something insert here
                showMessage(mainCharacterSpeech, characterAudio, "nothing is to the left");
                break;
            case "stone":
                if (checkItem("beer")) {
                    showMessage(mainCharacterSpeech, characterAudio, "Nothing is here anymore let's go somewhere else");
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "Ah, i found the beer let's head back to that weirdo in that jar, <br> i wonder how he even fits in there");
                    setTimeout(getItem, 5 * sec, "beer", "Beer ");
                }
                break;
            case "statue":

                if (checkItem("random key") && !checkItem("rusty key") && !checkItem("beer")) {
                    counterPortrait.src = "img/portairStatue.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "This isn't the right key!");
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "You didn't ask what kinda key..<br> Ow I find a key here on the bottom..<br> do mean that key?");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "YES just give me the key!");
                    setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "okay okay, wait you already use your wish <br> you can gain an extra wish if you want");
                    setTimeout(showMessage, 14 * sec, mainCharacterSpeech, characterAudio, "HOW");
                    setTimeout(showMessage, 18 * sec, counterSpeech, counterAudio, " there is a crate on the north side, in there is a beer bring that too me please");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 19 * sec);
                } else if (!checkItem("beer")){
                    counterPortrait.src = "img/portairStatue.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "Let's see if the key is in here");
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Who Dares to enter my jar");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "The dude in the house told me there is something in here");
                    setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "Yes, you have 1 wish what do you wish?");
                    setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "i wish for a key");
                    setTimeout(showMessage, 20 * sec, counterSpeech, counterAudio, "Just a key, a random key?");
                    setTimeout(showMessage, 24 * sec, mainCharacterSpeech, characterAudio, "the key thats in there");
                    setTimeout(showMessage, 28 * sec, counterSpeech, counterAudio, "okay here a random key");
                    setTimeout(getItem, 28 * sec, "random key", "randomKey");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 32 * sec);
                    setTimeout(showMessage, 32 * sec, mainCharacterSpeech, characterAudio, "Wait! What?");
                } if (checkItem("beer") && !checkItem("rusty key")) {
                    counterPortrait.src = "img/portairStatue.png";
                    counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "Hey You, i got your beer can i have my god damn key now");
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Who Dares to enter my jar");
                    setTimeout(showMessage, 8 * sec, counterSpeech, counterAudio, "oh its you again, thanks for the beer");
                    setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "can i have my key?!");
                    setTimeout(showMessage, 18 * sec, counterSpeech, counterAudio, "Oh yes almost forgot, here its kinda rusty");
                    setTimeout(getItem, 18 * sec, "rusty key", "rustyKey");
                    setTimeout(removeItem("beer", "Beer"));
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 19 * sec);
                } else

                break;

            default:
                // do something when it doesn't have a case
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    //Make a list item from scratch and store it in a variable
    let listItem = document.createElement("li");

    //Give List Item an ID name
    listItem.id = itemId;

    //fill that list item with value of inputfield
    listItem.appendChild(document.createTextNode(itemName));

    //find UL with id todoContainer and attach the list item to it.
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();

}
