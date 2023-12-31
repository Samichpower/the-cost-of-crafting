const tierOneMasterList = formatArraysToObject(tierOneItems, tierOneIngredients);
const tierTwoMasterList = formatArraysToObject(tierTwoItems, tierTwoIngredients);
const tierThreeMasterList = formatArraysToObject(tierThreeItems, tierThreeIngredients);
const tierFourMasterList = formatArraysToObject(tierFourItems, tierFourIngredients);
const getNewGameButton = document.querySelector('.new-list-btn');

const tierOneContainer = document.querySelector('.tier-one-items');
const tierTwoContainer = document.querySelector('.tier-two-items');
const tierThreeContainer = document.querySelector('.tier-three-items');
const tierFourContainer = document.querySelector('.tier-four-items');

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

function generateGame() {
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

  function appendItems() {
    function formatItems(item, itemName, recipe) {
      let bulletedRecipe = '';
      const recipeArray = item[recipe].split(', ');

      for (let i = 0; i < recipeArray.length; i++) {
        bulletedRecipe += `<li>${recipeArray[i]}</li>`
      }
      return `<div class="item-container"><p>${item[itemName]}</p><ul class="ingredients">${bulletedRecipe}</ul></div>`;
    }

    for (let i = 0; i < activeGameItems.length; i++) {
      if (i === 0 || i === 1) {
        tierOneContainer.innerHTML += formatItems(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 2 || i === 3) {
        tierTwoContainer.innerHTML += formatItems(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 4 || i === 5) {
        tierThreeContainer.innerHTML += formatItems(activeGameItems[i], 'itemName', 'recipe');
      } else if (i === 6 || i === 7) {
        tierFourContainer.innerHTML += formatItems(activeGameItems[i], 'itemName', 'recipe');
      }
    }
  }
  appendItems();
}

getNewGameButton.addEventListener('click', generateGame);