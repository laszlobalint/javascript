const fs = require('fs');

let result = 'use property\n';

function makeName () {
  var furniture = ['armchair', 'armoire', 'bar_stool', 'bassinet', 'beach_chair', 'bean_bag_chair', 'bed', 'bed_table', 'bench', 'bentwood_rocker', 'bergere', 'bookcase', 'bookshelf', 'breakfront', 'buffet', 'bunk_bed', 'bureau', 'cabinet', 'canopy_bed', 'captains_chair', 'card_table', 'carpet', 'cart', 'chair', 'chaise_lounge', 'chandelier', 'chest', 'chest_of_drawers', 'china_cabinet', 'clothes_valet', 'club_chair', 'coffee_table', 'console', 'cot', 'couch', 'cradle', 'credenza', 'crib', 'cubbies', 'cupboard', 'curio', 'curtains', 'cushion', 'deck_chair', 'desk', 'desk_chair', 'dining_room_table', 'directors_chair', 'display_cabinet', 'divan', 'drapery', 'drapes', 'dresser', 'easel', 'easy_chair', 'end_table', 'fateuil', 'file_cabinet', 'folding_chair', 'folding_screen', 'footrest', 'footstool', 'four-poster_bed', 'furnishings', 'furniture', 'futon', 'game_table', 'garden_bench', 'gateleg_table', 'glider_rocker', 'grandfather_clock', 'hall_tree', 'hammock', 'hassock', 'hat_stand', 'headboard', 'highchair', 'hope_chest', 'hutch', 'island', 'kitchen_island', 'ladderback_chair', 'lamp', 'lawn_chair', 'lift_chair', 'light', 'lintel', 'lounge_chair', 'lounger', 'love_seat', 'mantle', 'mattress', 'mirror', 'Murphy_bed', 'nightstand', 'office_chair', 'ottoman', 'pantry', 'park_bench', 'patio_chair', 'patio_table', 'pew', 'piano_bench', 'picnic_table', 'pillow', 'porch_swing', 'rack', 'recliner', 'rocking_chair', 'room_divider', 'rug', 'sconce', 'screen', 'seat', 'secretary', 'sectional_sofa', 'settee', 'shelf', 'shoji_screen', 'sideboard', 'sleeper_sofa', 'sofa', 'sofabed', 'stool', 'table', 'tansu', 'tea_cart', 'throne', 'throw_rug', 'trundle_bed', 'tuffet', 'valet', 'vanity', 'Venetian_blinds', 'vitrine', 'wardrobe', 'waste_basket', 'waterbed', 'window_shades', 'Windsor_chair', 'wing_chair', 'work_table', 'writing_desk'];
  var rand = furniture[Math.floor(Math.random() * furniture.length)];
  return rand;
}

function makePurpose () {
  let use = ['For use', 'Decoration', 'For relaxing', 'For working', 'For storage'];
  var rand = use[Math.floor(Math.random() * use.length)];
  return rand;
}

function makeDimensions () {
  let dimension = '';
  dimension += Math.floor((Math.random() * 100) + 1) + 'x' + Math.floor((Math.random() * 150) + 1) + 'x' + Math.floor((Math.random() * 200) + 1);
  return dimension;
}

function makeRoom () {
  let rooms = ['attic', 'basement', 'bathroom', 'bedroom', 'cellar', 'closet', 'den', 'dining room', 'front yard', 'garage', 'hall', 'hallway', 'kitchen', 'laundry', 'living room', 'master bedroom', 'office', 'pantry', 'patio', 'playroom', 'porch', 'staircase', 'study', 'sun room', 'TV room', 'workshop'];
  var rand = rooms[Math.floor(Math.random() * rooms.length)];
  return rand;
}

function makeColors () {
  let colors = ['brown', 'blue', 'gold', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'silver', 'white', 'yellow'];
  var rand = colors[Math.floor(Math.random() * colors.length)];
  return rand;
}

let i = 1;
for (i = 1; i < 622; i++) {
  let legsHas = Math.floor((Math.random() * 2));
  if (legsHas === 1) {
    let legsNum = Math.floor((Math.random() * 10) + 1);
    legsHas = 'yes';
    result += 'insert into furnitures (id, name, purpose, dimensions, room, colour, has_legs, num_of_legs) values ' + '(' + [i] + ', ' + "'" + makeName() + "'" + ', ' + "'" + makePurpose() + "'" + ', ' + "'" + makeDimensions() + "'" + ', ' + "'" + makeRoom() + "'" + ', ' + "'" + makeColors() + "'" + ', ' + "'" + legsHas + "'" + ', ' + legsNum + ");\n";
  } else {
    let legsNum = 0;
    legsHas = 'no';
    result += 'insert into furnitures (id, name, purpose, dimensions, room, colour, has_legs, num_of_legs) values ' + '(' + [i] + ', ' + "'" + makeName() + "'" + ', ' + "'" + makePurpose() + "'" + ', ' + "'" + makeDimensions() + "'" + ', ' + "'" + makeRoom() + "'" + ', ' + "'" + makeColors() + "'" + ', ' + "'" + legsHas + "'" + ', ' + legsNum + ");\n";
  }
}

fs.writeFileSync('furnitures.txt', result);
