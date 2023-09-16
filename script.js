function formatArraysToObject(itemsList, ingredientsList) {
  function itemToObject(itemsList, ingredientsList) {
    return {
      itemName: itemsList,
      recipe: ingredientsList
    }
  }
  const masterList = [];
  for (let i = 0; i < itemsList.length; i++) {
    masterList.push(itemToObject(itemsList[i], ingredientsList[i]));
  }
  return masterList;
}

const tierOneMasterList = formatArraysToObject(tierOneItems, tierOneIngredients);
const tierTwoMasterList = formatArraysToObject(tierTwoItems, tierTwoIngredients);
const tierThreeMasterList = formatArraysToObject(tierThreeItems, tierThreeIngredients);
const tierFourMasterList = formatArraysToObject(tierFourItems, tierFourIngredients);

const getNewGameButton = document.querySelector('.new-list-btn');
getNewGameButton.addEventListener('click', generateGame);

function generateGame() {
  const tierOneContainer = document.querySelector('.tier-one-items');
  const tierTwoContainer = document.querySelector('.tier-two-items');
  const tierThreeContainer = document.querySelector('.tier-three-items');
  const tierFourContainer = document.querySelector('.tier-four-items');
  
  tierOneContainer.innerHTML = '';
  tierTwoContainer.innerHTML = '';
  tierThreeContainer.innerHTML = '';
  tierFourContainer.innerHTML = '';

  const activeGameItems = [];

  function getTierItems(masterList) {
    function getRandomItem(masterList) {
      const randNum = Math.floor(Math.random() * masterList.length);
      return masterList[randNum];
    }
    for (let i = 0; i < 2;) {
      let randItem = getRandomItem(masterList);
      if (activeGameItems[activeGameItems.length - 1] != randItem) {
        activeGameItems.push(randItem);
        i++;
      }
    }
  }

  getTierItems(tierOneMasterList);
  getTierItems(tierTwoMasterList);
  getTierItems(tierThreeMasterList);
  getTierItems(tierFourMasterList);
  console.log(activeGameItems);

  function appendItems() {
    function formatItem(item, itemName, recipe) {
      return `<div class="item-container"><p>${item[itemName]}</p><ul><li>${item[recipe]}</li></ul></div>`
    }

    for (let i = 0; i < activeGameItems.length; i++) {
      if (i === 0 || i === 1) {
        tierOneContainer.innerHTML += formatItem(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 2 || i === 3) {
        tierTwoContainer.innerHTML += formatItem(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 4 || i === 5) {
        tierThreeContainer.innerHTML += formatItem(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 6 || i === 7) {
        tierFourContainer.innerHTML += formatItem(activeGameItems[i], 'itemName', 'recipe');
      }
    }
  }
  appendItems();
}