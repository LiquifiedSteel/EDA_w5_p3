console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
// addToCollection takes an array for the collection. Also an album title, an artist, and a publishing year and adds them all to an object, then
// adds the object to the collection array.
function addToCollection (collection, title, artist, yearPublished) {
  let newRecord = {
    title,
    artist,
    yearPublished,
  }
  collection.push(newRecord);
  return newRecord;
}
// testing for addToCollection, adds all Blacklite District albums to myCollection
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

// the function showCollection takes the desired collection as input and then console.logs every object (album) in the collection
function showCollection (collection) {
  for (i of collection) {
    console.log( i.title + ' by ' + i.artist + ' from ' + i.yearPublished );
  }
  return true;
}
console.log ( 'showCollection test :', showCollection(myCollection) );

// the function findByArtist takes the desired collection as well as the artist to search for and loops through the input collection and adds
// every object with the desired artist to a new array and returns the new collection of albums from only the desired artist
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
console.log( 'testing findByArtist part 3, should return all Blacklite District albums', findByArtist(myCollection, 'Blacklite District') );



function search (collection, searchObj) {
  let collect = [];
  console.log( 'running' );
  for (i of collection) {
    if (!searchObj || !searchObj.artist || !searchObj.yearPublished) {
      return collection;
    }
    if (i.artist === searchObj.artist) {
      if (i.yearPublished === searchObj.yearPublished) {
        collect.push(i)
      }
    }
  }
  return collect;
}
console.log( 'testing search, should return Souled Out album:', search(myCollection, { artist: 'Blacklite District', yearPublished: 2019 }) );
console.log( 'testing search, should return You\'re Welcome - XL and Blacklite District - XL albums:', search(myCollection, { artist: 'Blacklite District', yearPublished: 2023 }) );
console.log( 'testing search:', search(myCollection, { artist: '', yearPublished: 2023 }) );
console.log( 'testing search:', search(myCollection, { artist: ''}) );

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
