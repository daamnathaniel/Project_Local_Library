
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
     accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  }

function numberOfBorrows(account, books) {
   let counter = 0;
   books.forEach((book) => {
     book.borrows.forEach((borrower) => {
       account.id === borrower.id ? counter++ : counter;
     });
   });
   return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = books.filter((book) => book.borrows[0].id === account.id);
    filteredBooks.forEach((book) => { 
    book.author = authors.find((author) => author.id === book.authorId)
  });
    return filteredBooks;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
}

