console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  let newRecord = {
    title,
    artist,
    yearPublished,
  }
  collection.push(newRecord);
  return newRecord;
}
console.log( 'adding You Can Do Better by Blacklite District', addToCollection(myCollection, 'You Can Do Better', 'Blacklite District', 2024) );
console.log( 'adding You\'re Welcome - XL by Blacklite District', addToCollection(myCollection, 'You\'re Welcome - XL', 'Blacklite District', 2023) );
console.log( 'adding Blacklite District - XL by Blacklite District', addToCollection(myCollection, 'Blacklite District - XL', 'Blacklite District', 2023) );
console.log( 'adding 1990 - XL by Blacklite District', addToCollection(myCollection, '1990 - XL', 'Blacklite District', 2022) );
console.log( 'adding Souled Out by Blacklite District', addToCollection(myCollection, 'Souled Out', 'Blacklite District', 2019) );
console.log( 'adding Through the Ages by Blacklite District', addToCollection(myCollection, 'Through the Ages', 'Blacklite District', 2018) );
console.log( 'adding Instant Gratification by Blacklite District', addToCollection(myCollection, 'Instant Gratification', 'Blacklite District', 2017) );
console.log( 'adding To Whom It May Concern by Blacklite District', addToCollection(myCollection, 'To Whom It May Concern', 'Blacklite District', 2016) );
console.log( 'adding Worldwide Controversy by Blacklite District', addToCollection(myCollection, 'Worldwide Controversy', 'Blacklite District', 2014) );
console.log( 'testing myCollection', myCollection );


function showCollection (collection) {
  for (i of collection) {
    console.log( i.title + ' by ' + i.artist + ' from ' + i.yearPublished );
  }
  return true;
}
console.log ( 'showCollection test :', showCollection(myCollection) );


function findByArtist (collection, artist) {
  let collect = [];
  for (i of collection) {
    if (i.artist === artist) {
      collect.push(i);
    }
  }
  return collect;
}
console.log( 'testing findByArtist part 1:', addToCollection(myCollection, 'FREDDY', 'CG5', 2024) );
console.log( 'testing findByArtist part 2, should only return FREDDY by CG5:', findByArtist(myCollection, 'CG5') );
console.log( 'testing findByArtist part 2, should only return FREDDY by CG5:', findByArtist(myCollection, 'Blacklight Disstrict') );



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
