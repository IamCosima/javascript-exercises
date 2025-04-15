const getTheTitles = function(array) {
    let book = array.filter(array => array.title)
    var books = [] 
    console.log(book)
    for (let i = 0; i < book.length; i++) {
        books.push(array[i]["title"])
        
    }
    return books
};

// Do not edit below this line
module.exports = getTheTitles;
