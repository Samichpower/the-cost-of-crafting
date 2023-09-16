const tierOneItems = ['Crafting Table', 'Iron Sword', 'Oak Stairs', 'Muddy Mangrove Roots', 'Hopper', 'Brown Candle', 'Gold Ingot', 'Minecart', 'White Dye', 'Bread', 'Diamond Chestplate', 'Bowl', 'Composter', 'Torch', 'Birch Button', 'Chest', 'Furnace', 'Book', 'Wool', 'Lantern', 'Chain', 'Stone Pressure Plate', 'Stone Brick Wall', 'Jack O Lantern', 'Dried Kelp Block', 'Bricks', 'Flowerpot', 'Bowl', 'Fishing Rod', 'Cauldron', 'Lightning Rod', 'Clock', 'Stone Bricks'];

const tierOneIngredients = ['4 Planks', '2 Iron, 1 Stick', '6 Oak Planks', '1 Mud, 1 Mangrove Roots', '5 Iron Ingots, 1 Chest', '1 Candle, Brown Dye', '9 Gold Nuggets', '5 Iron Ingots', '1 Bonemeal', '3 Wheat', '8 Diamonds', '3 Wood Planks', '7 Wood Slabs', '1 Stick, 1 Coal', '1 Birch Planks', '8 Wood Planks', '8 Cobblestone', '3 Paper, 1 Leather', '4 String', '8 Iron Nuggets, 1 Torch', '2 Iron Nuggets, 1 Iron Ingot', '2 Stone', '6 Stone Bricks', '1 Carved Pumpkin, 1 Torch', '9 Dried Kelp', '4 Clay', '3 Clay', '3 Sticks, 3 String', '3 Sticks, 2 String', '7 Iron Ingots', '3 Copper Ingots', '4 Gold Ingots, 1 Redstone Dust', '4 Stone'];


function formatArraysToObject(itemsList, ingredientsList) {
  function itemToObject(itemsList, ingredientsList) {
    return {
      item: itemsList,
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

function getRandomItem(masterList) {
  const randNum = Math.floor(Math.random() * masterList.length);
  return masterList[randNum];
}


const chosenItems = [];

function getTierItems(masterList) {
  for (let i = 0; i < 2;) {
    let randItem = getRandomItem(masterList);
    if (chosenItems[chosenItems.length - 1] != randItem) {
      chosenItems.push(randItem);
      i++;
    }
  }
}
getTierItems(tierOneMasterList);

console.log(chosenItems);