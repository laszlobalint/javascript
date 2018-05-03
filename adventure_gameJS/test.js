const readlineSync = require('readline-sync');

var player = readlineSync.question('Mi a neved, hősünk? ');

function entry (player) {
  console.log('Üdvözöllek ' + player + '!');
  let ways = ['jobb', 'bal'];
  var way = readlineSync.keyInSelect(ways, 'Jobb vagy bal irányba mennél?');
  console.log('Te most a ' + ways[way] + ' járaton haladsz tovább.');
  if (way === 0) {
    jobb(player);
  } else if (way === 1) {
    bal(player);
  } else {
    end();
  }
}

function jobb (player) {
  let minerals = ['arany', 'gyémánt', 'vas', 'bauxit'];
  var mineral = readlineSync.keyInSelect(minerals, 'A jobb járat egy bányába vezet. Mit akarsz bányászni?');
  console.log('Hajrá! Ragadj eszközt, és induljon a munka!');
  let tools = ['kalapács', 'ásó', 'csákány', 'teáskanál'];
  var tool = readlineSync.keyInSelect(tools, 'Mivel akarsz bányászni? ');
  console.log('A kezedbe kaptad a/az ' + tools[tool] + '-t, és keményen dolgozol.');
  let treasures = ['Eladom a kincseket.', 'Bányászok tovább.'];
  var treasure = readlineSync.keyInSelect(treasures, 'Ügyes vagy. Mit fogsz csinálni a továbbiakban?');
  if (treasure === 0) {
    piac(player);
  } else if (treasure === 1) {
    console.log('Úristen! Túl mohó voltál. Hirtelen befolyt a karsztvíz, és megfulladtál!');
    end();
  } else {
    end();
  }
}

function bal (player) {
  let battles = ['labancok', 'kurucok'];
  var battle = readlineSync.keyInSelect(battles, 'A bal járat kivezet egy mezőre, ahol csata készül. Kinek az oldalára állsz?');
  console.log('Készen álsz a csatára. Folyjon a vér!');
  let weapons = ['kard', 'szablya', 'buzogány', 'nyílak és íj'];
  var weapon = readlineSync.keyInSelect(weapons, 'Milyen harci eszközt választasz a mészárláshoz?');
  console.log('A tiéd már a/az ' + weapons[weapon] + ', ess neki az ellenfélnek!'); 
}

function piac (player) {
  let fruits = ['alma', 'ananász', 'kiwi', 'körte'];
  var fruit = readlineSync.keyInSelect(fruits, 'Megérkeztél a helyi piacra a bányakincseddel, de megkívántál egy kis gyümölcsöt. Mit ennél szívesen?');
  console.log('Mmmm... Friss és lédús a ' + fruits[fruit] + '. Irány pénzt keresni.');
  let bargains = ['Jó lesz nekem az alapár is.', 'Még szép, hogy felnyomom az árat.'];
  var bargain = readlineSync.keyInSelect(bargains, 'A kovácsműhely felvásárolná, amit bányásztál. De elég keveset kínál. Mit teszel?');
  switch (bargain) {
    case 0:
      console.log('Hát, ez nem túl sok. 50 fillért kaptál a keményen megdolgozott kincsedért. Hogyan tovább?');
      if (readlineSync.keyInYN('Újrakezded a kalandot?')) {
        entry(player);
      } else {
        end();
      }
      break;
    case 1:
      console.log('Ajajjj... Rossz figurára szaladtál rá. Az árus előrántotta a kést, és elvágta a nyakadat.');
      end();
      break;
    default:
      end();
  }
}

function end () {
  console.log('A játék véget ért.');
}

// Entry point of the game:
entry(player);
