

const totalBooksCount = (books) => books.length;

const totalAccountsCount = (accounts) => accounts.length;

function booksBorrowedCount(books) {
  let count = 0;
  for (let book in books) {
    if (!books[book].borrows[0].returned)
      count += 1;
  }
      return count;
  }

const getMostCommonGenres = (books) => {
  const popular = books.reduce((acc, book) => {
    const found = acc.find((bookAcc) => bookAcc.name === book.genre); 
    ((!found) ? acc.push({ name: book.genre, count: 1 }) : found.count++); 
  return acc;
  }, []);
  return _sorted(popular);
};

const getMostPopularBooks = (books) => {
  const popular = books.reduce((acc, book) => {
    acc.push({ name: book.title, count: book.borrows.length }); 
    return acc;
  }, []);
  return _sorted(popular);
}

const getMostPopularAuthors = (books, authors) => {
  const popular = books.reduce((acc, book) => {
    const found = acc.find((bookAcc) => bookAcc.authorId === book.authorId); 
    const author = authors.find((auth) => auth.id === book.authorId); 
    ((!found) ? acc.push({ name: `${author.name.first} ${author.name.last}`, count: book.borrows.length,}) : found.count += book.borrows.length);
    return acc;
  }, []);
  return _sorted(popular);
}


//HELPER FUNCTION


const _sorted = (array) => {
  return array.sort((author1, author2) => author2.count - author1.count).splice(0, 5);
};

//HELPER FUNCTION

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
+