let currentState = "start";

let gameData = {
  start: {
    text: "You're standing at the entrance of a glamorous fashion show. What will you do?",
    choices: ["Attend the show", "Explore backstage"],
    consequences: ["attendShow", "exploreBackstage"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Carolina_Herrera_AW14_12.jpg/220px-Carolina_Herrera_AW14_12.jpg",
  },
  attendShow: {
    text: "You take your seat and enjoy the mesmerizing display of fashion on the runway. What's next?",
    choices: ["Attend the after-party", "Visit the designer booths"],
    consequences: ["attendParty", "visitDesigners"],
    image: "https://media.timeout.com/images/105923070/image.jpg",
  },
  exploreBackstage: {
    text: "You sneak backstage and witness the chaos behind the scenes. What do you do?",
    choices: ["Help a struggling model", "Chat with the designers"],
    consequences: ["helpModel", "chatDesigners"],
    image: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2019/03/15/d3ab1ca6-43e9-11e9-b5dc-9921d5eb8a6d_image_hires_054554.jpg",
  },
  
  visitDesigners: {
    text: "You visit the designer booths and admire their latest collections. What's your plan now?",
    choices: ["Purchase a statement piece", "Attend a fashion workshop"],
    consequences: ["purchasePiece", "attendWorkshop"],
    image: "https://cdn.cpdonline.co.uk/wp-content/uploads/2022/08/09140543/Becoming-a-fashion-designer-1.jpg",
  },

  purchasePiece: {
    text: "You purchase a stunning statement piece, adding flair to your wardrobe. Congratulations!",
    choices: ["Ending: Fashion Icon"],
    image: "https://www.gqmiddleeast.com/cloud/2023/03/17/HBME_110_S23SR_BOSS_SHOW_MIAMI_RUNWAY_FULL_LOOK_0026-820x1024.jpg",
  },
  attendWorkshop: {
    text: "You attend a fashion workshop and refine your skills, ready to take on the fashion world. Congratulations!",
    choices: ["Ending: Fashion Apprentice"],
    image: "https://www.morganmabelle.com/wp-content/uploads/2021/09/KCFW-runway-show.png",
  },
  assistBackstage: {
    text: "You offer to assist backstage and become part of the fashion show crew. Congratulations!",
    choices: ["Ending: Fashion Crew"],
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1096742640.jpg",
  },
  
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();
