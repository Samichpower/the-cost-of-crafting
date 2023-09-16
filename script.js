const tierOneItems = ['Crafting Table', 'Iron Sword', 'Oak Stairs', 'Muddy Mangrove Roots', 'Hopper', 'Brown Candle', 'Gold Ingot', 'Minecart', 'White Dye', 'Bread', 'Diamond Chestplate', 'Bowl', 'Composter', 'Torch', 'Birch Button', 'Chest', 'Furnace', 'Book', 'Wool', 'Lantern', 'Chain', 'Stone Pressure Plate', 'Stone Brick Wall', 'Jack O Lantern', 'Dried Kelp Block', 'Bricks', 'Flowerpot', 'Bowl', 'Fishing Rod', 'Cauldron', 'Lightning Rod', 'Clock', 'Stone Bricks'];
const tierOneIngredients = ['4 Planks', '2 Iron, 1 Stick', '6 Oak Planks', '1 Mud, 1 Mangrove Roots', '5 Iron Ingots, 1 Chest', '1 Candle, Brown Dye', '9 Gold Nuggets', '5 Iron Ingots', '1 Bonemeal', '3 Wheat', '8 Diamonds', '3 Wood Planks', '7 Wood Slabs', '1 Stick, 1 Coal', '1 Birch Planks', '8 Wood Planks', '8 Cobblestone', '3 Paper, 1 Leather', '4 String', '8 Iron Nuggets, 1 Torch', '2 Iron Nuggets, 1 Iron Ingot', '2 Stone', '6 Stone Bricks', '1 Carved Pumpkin, 1 Torch', '9 Dried Kelp', '4 Clay', '3 Clay', '3 Sticks, 3 String', '3 Sticks, 2 String', '7 Iron Ingots', '3 Copper Ingots', '4 Gold Ingots, 1 Redstone Dust', '4 Stone'];

const tierTwoItems = ['Acacia Fence Gate', 'Andesite', 'Anvil', 'Bamboo Raft with Chest', 'Barrel', 'Beehive', 'Bookshelf', 'Brewing Stand', 'Campfire', 'Chiseled Sandstone', 'Cut Copper', 'Dispenser', 'Empty Map', 'Eye of Ender', 'Glistering Melon Slice', 'Golden Apple', 'Honey Block', 'Honey Bottle', 'Honeycomb Block', 'Iron Trapdoor', 'Item Frame', 'Magma Block', 'Mangrove Fence', 'Music Disc 5', 'Netherwart Block', 'Noteblock', 'Orange Banner', 'Painting', 'Purple Terracotta', 'Rail', 'Recovery Compass', 'Scaffolding', 'Shield', 'Smithing Table', 'Target Block', 'Tinted Glass', 'Turtle Shell', 'Warped Hyphae', 'Yellow Stained Glass'];
const tierTwoIngredients = ['4 Sticks, 2 Acacia Planks', '1 Diorite, 1 Cobblestone', '4 Iron Ingots, 3 Iron blocks', '1 Bamboo Raft, 1 Chest', '6 Wood Planks, 2 Wood Slabs', '6 Wood Planks, 3 Honeycomb', '6 Wood Planks, 3 Books', '3 Cobblestone/Cobbled Deepslate/Blackstone, 1 Blaze Rod', '3 Logs/Wood, 3 Sticks, 1 Coal/Charcoal', '2 Sandstone Slabs', '4 Blocks of Copper', '7 Cobblestone, 1 Redstone Dust, 1 Bow', '8 Paper, 1 Compass', '1 Ender Pearl, 1 Blaze Powder', '8 Gold Ingots, 1 Melon Slice', '8 Gold Ingots, 1 Apple', '4 Honey Bottles', '4 Glass Bottles, 1 Honey Block', '4 Honeycomb', '4 Iron Ingots', '8 Sticks, 1 Leather', '4 Magma Cream', '4 Mangrove Planks, 2 Sticks', '9 Disc Fragments', '9 Netherwart', '8 Wood Planks, 1 Redstone Dust', '6 Orange Wool, 1 Stick', '8 Sticks, 1 Wool', '8 Terracotta, 1 Purple Dye', '6 Iron Ingots, 1 Stick', '8 Echo Shards, 1 Compass', '6 Bamboo, 1 String', '6 Wood Planks', '1 Iron Ingot', '4 Wood Planks, 2 Iron ingots', '4 Redstone Dust, 1 Hay Bale', '4 Amethyst Shards, 1 Glass', '5 Scutes', '4 Warped Stem', '8 Glass, 1 Yellow Dye'];

const tierThreeItems = ['Armor Stand', 'Bamboo Mosaic', 'Beacon', 'Beetroot Soup', 'Brush', 'Cartography Table', 'Chiseled Bookshelf', 'Conduit', 'Cookie', 'Crimson Hanging Sign', 'Dark Prismarine', 'Diorite', 'Enchanting Table', 'End Rods', 'Ender Chest', 'Fermented Spider Eye', 'Fletching Table', 'Granite', 'Grindstone', 'Jukebox', 'Leather Horse Armor', 'Lectern', 'Lodestone', 'Netherite Ingot', 'Observer', 'Powered Rail', 'PurPur Block', 'Red Nether Bricks', 'Redstone Comparitor', 'Sea Lantern', 'Soul Campfire', 'Stonecutter', 'TNT'];
const tierThreeIngredients = ['8 Sticks, 1 Smooth Stone Slab', '2 Bamboo Slabs', '5 Glass, 3 Obsidian, 1 Nether Star', '6 Beetroot, 1 Bowl', '1 Feather, 1 Copper Ingot, 1 Stick', '4 Wood Planks, 2 Paper', '6 Wood Planks, 3 Wood Slabs', '8 Nautilus Shells, 1 Heart of the Sea', '2 Wheat, 1 Cocoa Beans', '6 Stripped Crimson Stem, 2 Chain', '8 Prismarine Shards, 1 Black Dye', '2 Cobblestone, 2 Nether Quartz', '4 Obsidian, 2 Diamonds, 1 Book', '1 Blaze Rod, 1 Popped Chorus Fruit', '1 Eye of Ender, 8 Obsidian', '1 Spider Eye, 1 Brown Mushroom, 1 Sugar', '4 Wood Planks, 2 Flint', '1 Diorite, 1 Nether Quartz', '2 Wood Planks, 2 Sticks, 1 Stone Slab', '8 Wood Planks, 1 Diamond', '7 Leather', '4 Wood Slabs, 1 Bookshelf', '8 Chiseled Stone, 1 Netherite Ingot', '4 Gold Ingots, 4 Netherite Scrap', '6 Cobblestone, 2 Redstone Dust, 1 Nether Quartz', '6 Gold Ingots, 1 Stick, 1 Redstone Dust', '4 Popped Chorus Fruit', '2 Nether Bricks, 2 Nether Wart', '3 Stone, 3 Restone Torches, 1 Nether Quartz', '5 Prismarine Crystals, 4 Prismarine Shards', '3 Logs/Wood, 3 Sticks, 1 Soulsand/Soulsoil', '3 Stone, 1 Iron Ingot', '5 Gunpowder, 4 Sand'];

const tierFourItems = ['Activator Rail', 'Arrow of Regeneration', 'Blast Furnace', 'Cake', 'Calibrated Sculk Sensor', 'Crossbow', 'Daylight Detector', 'Detector Rail', 'End Crystal', 'Fire Charge', 'Loom', 'Piston', 'PurPur Pillar', 'Rabbit Stew', 'Respawn Anchor', 'Tripwire Wook'];
const tierFourIngredients = ['6 Iron ingots, 2 Sticks, 1 Restone Torch', '8 Arrows, Lingering Potion of Regeneration', '3 Smooth Stone, 5 Iron Ingots, 1 Furnace', '3 Buckets of Milk, 2 Sugar, 1 Egg, 3 Wheat', '3 Amethyst Shards, 1 Sculk Sensor', '3 Sticks, 2 String, 1 Iron Ingot, 1 Tripwire Hook', '3 Glass, 3 Nether Quartz, 3 Wood Slabs', '6 Iron ingots, 1 Stone Pressure Plate, 1 Redstone Dust', '7 Glass, 1 Eye of Ender, 1 Ghast Tear', '1 Gunpowder, 1 Coal/Charcoal, 1 Blaze Powder', '2 String, 2 Wood Planks', '4 Cobblestone, 3 Wood Planks, 1 Iron Ingot, 1 Redstone Dust', '2 Purpur Slabs', '1 Cooked Rabbit, 1 Mushroom (either), 1 Baked Potato, 1 Carrot, 1 Bowl', '6 Crying Obsidian, 3 Glowstone', '1 Iron Ingot, 1 Stick, 1 Wood Planks'];



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
      }
    }
  }
  appendItems();
}