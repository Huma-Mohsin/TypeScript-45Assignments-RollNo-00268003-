//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//solution.

//Write a function called make_album() that builds a Object describing a music album.

type Album={//declaring the structure of an album.
    artist:string,
    title:string;
    tracks?:number;//track is an optional parameter.
}
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
function make_album(artist:string, title:string, tracks?:number):Album{
//Use the function to make three dictionaries representing different albums.
const album: Album = { artist, title };
 if (tracks !== undefined) {
 album.tracks = tracks;
 }
    return album;


}
//Print each return value to show that Objects are storing the album information correctly.

const album1: Album = make_album("Artist1", "Album One");

//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
///If the calling line includes a value for the number of tracks, add that value to the album’s Object. 

const album2: Album = make_album("Artist2", "Album Two", 12);
 const album3: Album = make_album("Artist3", "Album Three", 8);


//Make at least one new function call that includes the number of tracks on an album.
console.log(album1);
 console.log(album2);
 console.log(album3);

 ////AUTHOR-"HUMA MOHSIN"
//DATE- 28-02-20240
//ROLL NO- 00268003