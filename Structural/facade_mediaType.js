class FetchMusic {
    get resources() {
        return [
          { id: 1, title: "The Fragile" },
          { id: 2, title: "Alladin Sane" },
          { id: 3, title: "OK Computer" }
        ];
    }
    
    fetch(id) {
        return this.resources.find(item => item.id === id);
    }
}

class GetMovie {
    constructor(id) {
        return this.resources.find(item => item.id === id);
    }
  
    get resources() {
        return [
            { id: 1, title: "Apocalypse Now" },
            { id: 2, title: "Die Hard" },
            { id: 3, title: "Big Lebowski" }
        ];
    }
}

const getTvShow = function(id) {
    const resources = [
      { id: 1, title: "Twin Peaks" },
      { id: 2, title: "Luther" },
      { id: 3, title: "The Simpsons" }
    ];
    return resources.find(item => item.id === id);
};


const booksResource = [
    { id: 1, title: "Ulysses" },
    { id: 2, title: "Ham on Rye" },
    { id: 3, title: "Quicksilver" }
];
const TYPE_MUSIC = "music";
const TYPE_MOVIE = "movie";
const TYPE_TV = "tv";
const TYPE_BOOK = "book";

class MediaFacade {
    constructor(type) {
      this.type = type;
    }

    get _error(){
        return { status : 404, message : "No item with this id found"}
    }
  
    get(id) {
        switch (this.type) {
          case TYPE_MUSIC: {
            return this._tryToReturn(this._findMusic, id);
          }
    
          case TYPE_MOVIE: {
            return this._tryToReturn(this._findMovie, id);
          }
    
          case TYPE_TV: {
            return this._tryToReturn(this._findTVShow, id);
          }
    
          case TYPE_BOOK: {
            return this._tryToReturn(this._findBook, id);
          }
    
          default: {
            throw new Error("No type set!");
          }
        }
    }
    // internal function 

    _findMusic(id) {
        const db = new FetchMusic();
        return db.fetch(id);
    }
    
    _findMovie(id) {
        return new GetMovie(id);
    }
    
    _findTVShow(id) {
        return getTvShow(id);
    }
    
    _findBook(id) {
        return booksResource.find(item => item.id === id);
    }

    _tryToReturn(fn, id){
        const result = fn.call(this, id);
        return new Promise((resolve, reject)=> !!result ? resolve(result) : reject(this._error));
    }
}

const movies = new MediaFacade(TYPE_MOVIE);
movies.get(1).then(data => console.log(data)).catch(e => console.log(e));