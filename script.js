const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature'
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux'
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452
      }
    }
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy'
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0
      }
    }
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: ''
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701
      }
    }
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal'
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960
      }
    }
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos'
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095
      }
    }
  }
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find(d => d.id === id);
}

// ! 02 Destructuring Objects and Arrays

const books = getBooks();

// Notice that the Jonas is using Quokka to display the output
// Instead of using console.log, he will just write the name of the variable and it will display the output on the editor
// You will not do that. Instead just console.log and write the answer in comments
// This will be needed to transfer the information to Obsidian

const book = getBook(2); // See the definition of the function `getBook` above (goes into the object and returns with `find` the `id` ok the book)
// It will return book with the id equal to 2

console.log(book); // { id: 2, title: 'The Cyberiad', ...}
console.log(book.title); // The Cyberiad

// // -- Or, you can create variables one by one, like this:

// const title = book.title;
// const author = book.author;

// console.log(title); // The Cyberiad
// console.log(author); // Stanislaw Lem

// -- Or you can destructure the object like this (and create all variables at once):

// const { title, author } = book;
// console.log(title, author); // [ 'The Cyberiad', 'Stanislaw Lem' ]

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres); // The Cyberiad, The Cyberiad Stanislaw Lem, [  'science fiction',  'humor', 'speculative fiction',  'short stories',  'fantasy' ]

// // -- Accessing the elements inside `genres`

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre, secondaryGenre); // science fiction, humor

// // -- Or using destructuring again with arrays

// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre); // science fiction, humor

// ! 03 Rest and Spread Operator

// Adding the `...otherGenres` will automatically create an array which contains all the values that were not previously destructured
// Notice that the `rest` element can only be placed at the end of the array for the destructuring pattern

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres); // 'science fiction', 'humor', [ 'speculative fiction', 'short stories', 'fantasy' ]

// This three dot syntax is also used for the `spread` operator, which is a little more common that the `rest` operator

// An example would be creating a new array with the `genres` array and adding a new element in the end of the array

// See the WRONG approach below

const wrongNewGenres = [genres, 'epic fantasy'];
console.log(wrongNewGenres); // [ [   'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'  ],  'epic fantasy' ]

// The correct way is to use the `spread` operator, which will take the whole array and place each element, one by one, at the beginning of the array
// So this new array will be one single array with all the elements, including `'epic fantasy'` at the end

const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres); // [ 'science fiction', 'humor','speculative fiction','short stories', 'fantasy', 'epic fantasy' ]

// The same would be true for the inverse

const newGenresInverse = ['epic fantasy', ...genres];
console.log(newGenresInverse); // [ 'epic fantasy', 'science fiction', 'humor','speculative fiction','short stories', 'fantasy' ]

// Making an "updated" book object

const bookUpdated = getBook(1);

// The wrong way by just adding without the spread operator

const updatedBookWrong = { bookUpdated, moviePublicationDate: '2001-12-19' };
console.log(updatedBookWrong); // { bookUpdated: { id: 1, title: 'To Kill a Mockingbird', ... }, moviePublicationDate: '2001-12-19' }

// The right way using the spread operator to add a new property

const updatedBook = { ...bookUpdated, moviePublicationDate: '2001-12-19' };
console.log(updatedBook); // { id: 1, title: 'To Kill a Mockingbird', ...moviePublicationDate: '2001-12-19' }

// You can also use to overwrite properties: see the example below how the `pages` property is overwritten by placing a `pages` property after the spread operator

const updatedBookWithPages = { ...updatedBook, pages: 324 };
console.log(updatedBookWithPages); // { id: 1, title: 'To Kill a Mockingbird', ...pages: 342, ...moviePublicationDate: '2001-12-19'  }

// This is important in React.js because you will use this technique to update objects in state
// So keep in mind this last two lessons: a new object with new properties or overwriting existing properties

// ! 04 Template Literals

// With template literals (backticks) you can make strings and also add JS expressions with inside the placeholder `${}`

const summary = `${title} is a ${pages}-page long book, was written by ${author} and published in ${publicationDate}`;
console.log(summary); // The Cyberiad is a 295-page long book, was written by Stanislaw Lem and published in 1965-01-01

// ! 05 Ternary Operator

// The ternary consists of three parts: first is the condition, secondly, return it if the condition is true, and thirdly, return it if the condition is false

// Example of a ternary if a book has over a thousand pages

const pagesThousand =
  pages > 1000 ? 'over a thousand pages' : 'less than a thousand pages';

console.log('The Cyberiad has', pagesThousand); // The Cyberiad has less than a thousand pages

// Combining with template literals

console.log(`The book has ${pagesThousand} pages`); // The book has less than a thousand pages pages

// Inserting the expression directly into the template literal

const summaryPages = `${title} is a ${pages}-page long book, was written by ${author} and published in ${publicationDate}. The book has ${
  hasMovieAdaptation ? '' : 'not'
} been adapted as a movie`;
console.log(summaryPages); // The Cyberiad is a 295-page long book, was written by Stanislaw Lem and published in 1965-01-01. The book has not been adapted as a movie

// ! Arrow Functions

// Function declaration

function getYear(str) {
  return str.split('-')[0]; // This will split the date that are separated by `-` into an array with numbers, `[0]` will access the first element (number)
}

console.log(getYear(publicationDate)); // 1965

// Function expression

const getYearExp = function (str) {
  return str.split('-')[0];
};

console.log(getYearExp(publicationDate)); // 1965

// Arrow functions are a new way of writing functions introduced in ES6 and used for short one-line functions
// The arrow function makes the `return` keyword implicit

const getYearArrow = str => str.split('-')[0];

console.log(getYearArrow(publicationDate)); // 1965

// You can still use brackets in an arrow function, but you have to add the brackets when doing that
// If you forget the `return` keyword, the function call will return `undefined`

const getYearArrowReturn = str => {
  return str.split('-')[0];
};

console.log(getYearArrowReturn(publicationDate)); // 1965

// Adding the arrow function variable to the summary pages

const summaryPagesArrow = `${title} is a ${pages}-page long book, was written by ${author} and published in ${getYearArrow(
  publicationDate
)}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;

console.log(summaryPagesArrow); // The Cyberiad is a 295-page long book, was written by Stanislaw Lem and published in 1965. The book has not been adapted as a movie

// ! 07 Short-Circuiting and Logical Operators

// Short-circuiting means that in certain conditions the operator will immediately return the first value and not even look at the second value

// Short Circuiting for &&

// Starting with the && (And Operator): Let's rewind it to what this operator mean. The && operator will return true if both conditions are true.
// But what does this mean in terms of short-circuiting? When evaluating two values, if the first value is true, then the second value is immediately returned
// This happens because the both conditions need to be true in for this operator, but since the first value is true, then the second value also need to be checked or evaluated
// On the other hand, if the first value is false, then it is immediately returned, without even checking the second value. This happens because of the initial definition that both need to be true, so the second value is not even evaluated

console.log(true && 'Some string'); // Some string
console.log(false && 'Some string'); // false
console.log(hasMovieAdaptation && 'This book has a movie'); // false

// Recap on falsy values:

// Zero of Number type: 0 and also -0, 0.0, and hex form 0x0
// Zero of BigInt type: 0n and 0x0n
// "", '' and `` - strings of length 0
// null
// undefined
// NaN
// document.all (in HTML browsers only)

// Or basically: 0, '', null, undefined, NaN

console.log('Some string' && ' Another string'); // Another string
console.log(0 && 'Some string'); // 0

// What practical meaning does this have? This means that short-circuiting && acts like an `if` statement
// How so? Well, look at the first example. If you have a true condition, it will necessarily return the second value, just like a true `if` statement returning something

// For instance, taking the first example

console.log(true && 'Some string'); // Some string

// Is the same as writing

if (true) {
  console.log('Some string'); // Some string
}

// The short-circuiting && operator makes it possible to chain multiple conditions together in a single line of code, without having to use multiple `if` statements

// Another practical use is safely access nested properties. For instance, see the other example below.

const user = { address: { city: 'New York' } };
const city = user.address && user.address.city;
console.log(city); // New York

/*

In this example, `user` is an object containing another object `address`, which contains the `city` property.
The expression `user.address && user.address.city` is utilizing short-circuiting. 
It checks if `user.address` exists and if it does, it further checks if `user.address.city` exists.

If `user.address` is truthy (if it exists), JS proceeds to evaluate `user.address.city`.

If `user.address` is falsy (if it's undefined or null), JS short-circuits the evaluation and doesn't proceed to evaluate `user.address.city`.

This prevents a potential `TypeError` if `user.address` is not defined or null.
Since `user.address` exists in this case, the expression evaluates to the value of `user.address.city`, which is `'New York'.`

*/

// Short-circuiting for ||

// Now short-circuiting for the Or Operator works in the opposite way
// By definition, for ||, if one of the conditions is true, it returns true

// In terms of short-circuiting, this means that if the first value being evaluated is true, it is immediately returned
// This happens because just one value needs to be true for || to work
// The same way, if the first value is false, then it needs to check if the second value is true. This means then that the second value is immediately returned

console.log(true || 'Some string'); // true
console.log(false || 'Some string'); // Some string

// In practical terms, you can use this to set default values

// In the example below there is a translation for `const bookUpdated = getBook(1);` which corresponds to the "Lord of the Rings"

console.log(bookUpdated.translations.spanish); // El señor de los anillos

// But there is no translation for `const book = getBook(2);` which corresponds to the "The Cyberiad"
// This would return undefined

// console.log(book.translations.spanish); // undefined

// Use the || operator to set a default value

const spanishTranslation = book.translations.spanish || 'Not translated!';
console.log(spanishTranslation); // Not translated!

// The Nullish Coalescing Operator ??

// This operator was introduced in JS to solve a problem of short-circuiting that happens when the second value is zero (`0`) or an empty string (`''`)
// Sometimes you want to include zero (and empty string, but more commonly zero) when setting default values
// But that would be impossible to do with the || Operator, because 0 and empty string are both falsy values

// See the example below, where you will set default values

// Accessing the property `reviewsCount` for `bookUpdated` shows 452 reviews, and for `book`("The Cyberiad")` show `0` reviews

console.log(bookUpdated.reviews.librarything.reviewsCount); // 452
console.log(book.reviews.librarything.reviewsCount); // 0

// You are able to set the default value and return `452` for the `bookUpdated`, but not for `book`, which is `0`
// If you want to return this value, but also setting a condition default value of printing `'no data'`, it would not return `0`
// This happens because it is a falsy value, and the || operator will evaluate the first value, see that it is `0`
// And then return the second value `'no data'`, but when in fact, there is data, but it is, has mentioned, `0` (falsy value)

const countTolkien = bookUpdated.reviews.librarything.reviewsCount || 'no data';
console.log(countTolkien); // 452

const countWrong = book.reviews.librarything.reviewsCount || 'no data';
console.log(countWrong); // no data

// So it "wrongly" returns `no data`
// The solution for this is the Nullish Coalescing Operator `??` that was introduced in JS to include `0` and `''` in the short-circuiting
// Now `0` is "correctly" return for our purposes
// Note that `null` and `undefined` still do not short-circuit, even with ??

const countCorrect = book.reviews.librarything.reviewsCount ?? 'no data';
console.log(countCorrect); // 0

// ! 08 Optional Chaining

//There are different `reviewCount` keys inside the `data` object, for instance, `reviews` and `librarything` both have a key named `reviewCount`

// Let's make a function that gets the total number of review counts

function getTotalReviewCountNoOptChain(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodreads + librarything;
}

console.log(getTotalReviewCountNoOptChain(book)); // 812 // This corresponds to `book`, which refers to "The Cyberiad"

// Let's make a variable for Book with id = 3, which is "Dune"

const bookDune = getBook(3);

// But if you print `bookDune`, you will see that it does not have the property `reviewsCount` in `librarything` (it just has `goodreads`)

console.log(bookDune); // Prints Dune properties (note, there is no `library` property)

// This will result in an `TypeError` (see below), similar to calling the property on `undefined` (because there is no `librarything` property)

// console.log(getTotalReviewCountNoOptChain(bookDune)); // TypeError: Cannot read properties of undefined (reading 'reviewsCount')

// Now let's solve the problem above by adding an optional chaining `?.`

// Optional chaining will make sure that whenever there is an `undefined` or `null` value, then JS will no longer even try to read the property
// In this case, it will not even try to read `reviewsCount` property
// This means that `book.reviews.librarything?.reviewsCount` will become `undefined`
// The chain will only continue if it is NOT `undefined` or NOT `null`

// But since the value is `undefined`, you have to also add a default value
// And the perfect operator for this situation is the Nullish Coalescing Operator ??

// Now it reads as if there is no count (`reviewsCount`) for `librarything`, then the default value should just be `0`

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book)); // 812
console.log(getTotalReviewCount(bookDune)); // 49701

// So optional chaining `?.` is helpful whenever you are not sure that all the values that you expect exist in an object

// You could even rewrite the function as shown below if you are really not sure of the existence of the object properties

function getTotalReviewCountModified(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// 09 Map

// Reminder that to return the whole `data` object you have `const books = getBooks()`
// And `const getBooks = () => data` and `const getBook = id => data.find(d => d.id === id)`

// Starting with a simple example for `map`: doubling the values of an array
// `(el => el * 2)` is a callback function which gets called for each element of the array
// The element `el` is going to be current element of the array
// Starting with the first element, `el` is going to be `1`, which is going to be  `1 * 2` which is equal to `2`
// And so forth, until the last element of the array

// So the map method basically creates a new array based on the original array with some operation applied to each element of the original array

const x = [1, 2, 3, 4, 5].map(el => el * 2);
console.log(x); // [2, 4, 6, 8, 10]

// Creating a new array with all the titles of all the books (instead of having the whole `books` object)

const titles = books.map(book => book.title);
console.log(titles); // ['The Lord of the Rings', 'The Cyberiad','Dune', "Harry Potter and the Philosopher's Stone", 'A Game of Thrones']

// Let's make a function that returns the title and author inside of object (which is inside the array from map)
// With a more complex function you usually need to add the `return` keyword

const essentialDataReturn = books.map(book => {
  return {
    title: book.title,
    author: book.author
  };
});

console.log(essentialDataReturn); // [  { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien' },  { title: 'The Cyberiad', author: 'Stanislaw Lem' },  { title: 'Dune', author: 'Frank Herbert' },  {    title: 'Harry Potter and the Philosopher\'s Stone',    author: 'J. K. Rowling'  },  { title: 'A Game of Thrones', author: 'George R. R. Martin' }]

// You can also omit the `return` keyword if you set the object you want to return in parentheses
// Let's also add a function `getTotalReviewsCount` to return to the object the `reviewsCount` (from last lecture)

const essentialData = books.map(book => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book)
}));

console.log(essentialData); // [  {    title: 'The Lord of the Rings',    author: 'J. R. R. Tolkien',    reviewsCount: 13869  },  { title: 'The Cyberiad', author: 'Stanislaw Lem', reviewsCount: 812 },  { title: 'Dune', author: 'Frank Herbert', reviewsCount: 49701 },  {    title: "Harry Potter and the Philosopher's Stone",    author: 'J. K. Rowling',    reviewsCount: 142585  },  {    title: 'A Game of Thrones',    author: 'George R. R. Martin',    reviewsCount: 60153  }]

// 10 Filter

// The filter method filters out some elements of an array based on a condition

// The next example will show how to filter out books with more than 500 pages
// Similarly, you need to pass a callback function which should return something
// Instead of returning a array with the result of the operation (when `map` was used), for filter the return value will either be true or false
// If it is true, the current element will go into the filtered array

const longBooks = books.filter(book => book.pages > 500);
console.log(longBooks); // This returns id's 1, 3, 5 (whole objects!) which corresponds to The Lord of the Rings, Dune and Games of Thrones

// You can also chain methods
// What about movies with more than 500 pages and that were also adapted as movies

const longBooksWithMovie = books
  .filter(book => book.pages > 500)
  .filter(book => book.hasMovieAdaptation);
console.log(longBooksWithMovie); // This returns the movies from before, because all of them have the property `hasMovieAdaptation: true`

// Let's filter by genres, and see if these genres `includes` "adventures", and also `map` to only see the `title` property (so you don't have to see the full object, as it was displayed in the previous two examples)

const adventureBooks = books
  .filter(books => books.genres.includes('adventure'))
  .map(book => book.title);

console.log(adventureBooks); // ['The Lord of the Rings', 'Dune', "Harry Potter and the Philosopher's Stone"]

// ! 11 Reduce

// The most powerful and versatile array method in JS
// You could probably have the same results as the other methods just using the reduce method, although it would be more complicated

// One of the most common cases is to add together numbers, or any math operation with numbers

// Let's see how many pages you would have to read if you were to read all the books
// The solution is of course to just add together the numbers of all `pages` properties in all books in the array

// The reduce method also takes a callback function which will be executed for each element of the array, as the first argument
// And as the second argument, it also takes in a starter value

// But what does the reduce method really does and is used for?
// The goal of the `reduce` method is to reduce the entire array to just one value

// In this example you want to reduce all the pages to one number, or the total number of pages
// You are going to have the second argument as `0` for this example, since you want to add all the pages together

// But let's rewind back a little to the first argument: it is not only the callback function, but the callback function itself has two parameters
// The first parameter is the accumulator, while the second parameter is the current element
// The accumulator is basically the final value you want to reduce to
// The accumulator is what you want to return, plus the book pages (`book.pages`)

// At the start he `acc` will be `0` and add together the pages for the first book (`1216`)
// Then the value of the second argument of our reduce function will be `1216` now
// And so forth, adding each new number of pages in sequence, until it reaches or reduces to just `3227`

// The initial value, which corresponds to the second argument of our reduce function can also be an array `[]` or even a `object`
// It really can be anything, which would likely mean that you can have the same results as you did with `map` and `filter`, although much harder
// To make the code more readable, you could even change the `acc` to `sum`, or `add`

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks); // 3227

// ! 12 Sort

// This method sorts an array, and it is frequently used in React.js

const arr = [3, 7, 1, 9, 6];

const ascendingSort = arr.sort((a, b) => a - b);
console.log(ascendingSort); // [ 1, 3, 6, 7, 9 ]
console.log(arr); // [ 1, 3, 6, 7, 9 ]

const descendingSort = arr.sort((a, b) => b - a);
console.log(descendingSort); // [ 9, 7, 6, 3, 1 ]
console.log(arr); // [ 1, 3, 6, 7, 9 ]

// But notice something when printing `arr`
// This method mutates the original array (MOA)
// A way around this is to use `slice`, which will create a copy of the original array

const arrNew = [3, 7, 1, 9, 6];

const spliceSort = arrNew.slice().sort((a, b) => a - b);
console.log(spliceSort); // [ 1, 3, 6, 7, 9 ]

// As a final example let's create a sorted array based on the number of pages (descending from), and mapping to return just the titles and number of pages

const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map(book => {
    return book.title + ' | Pages: ' + book.pages;
  });
console.log(sortedByPages); // [  'The Lord of the Rings | Pages: 1216',  'A Game of Thrones | Pages: 835',  'Dune | Pages: 658',  'The Cyberiad | Pages: 295',  "Harry Potter and the Philosopher's Stone | Pages: 223" ]

// ! 13 Working with Immutable Arrays

// Many operations need to be immutable, meaning, it will not manipulate the underlying data structure
// How to add, delete and update elements without manipulating the original underlying array

// 1) Add book object to array (spread the current elements and add a new element)

const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
  pages: 251,
  genres: ['fantasy', 'adventure', 'children'],
  hasMovieAdaptation: true
};

// Spreading the current elements with `...books` and add a new element `newBook`

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd); // Whole `books` data plus `newBook` object

// 2) Delete book object from array (deleting book with the `id` equal to 3 by filtering all that are all books that have an `id !== 3)

// Basically the one value to be deleted, is going to be `false` when strict inequality operator  `!==` is applied.
// All the other values, except `3`, are going to return `true` and be included in the filtered array.

const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
console.log(booksAfterDelete); // Dune (`id = 3`) is not longer inside the list, because the filter only includes books that have an `id` different from 3

// 3) Update book object in the array

// In this example, change the pages of the book of `id = 1` (The Lord of the Rings) to `1210` pages

const booksAfterUpdate = booksAfterDelete.map(book =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate); // The Lord of the Rings has now 1210 pages (initially it had 1216)

// To update use `map`, because it keeps the same array length
// Then use the ternary operator selecting the property you want to update, and create a new property (object) and overwrite the property that you want to manipulate
// And for all the other books (the second part of the ternary), just return the `book` unchanged (so all the other elements from the array are kept unchanged)

// ! 14 Asynchronous JS Promises

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data));

// console.log('Jonas');

// // 'Jonas' is printed first, then the fulfilled Promise, which is a big object

// ! 15 Asynchronous JS Async Await

// The same as the previous lecture, but using async await syntax, which makes the code a little more like synchronous code, and removes callback hell

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}

// Do not forget to call the function

getTodos();

console.log('Jonas');

// Jonas is still printed first!

// The above is usually what you will encounter in React.js

// A less common way is having to return the data `Promise` object, displayed below.

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);

  return data;
}

// You will have to save it in a variable, and then resolve with `then()`, if you want to do another thing with this object

const todos = getTodos();
console.log(todos);
console.log('Jonas');

// The Promise will be printed "first" (and 'Jonas' secondly), but it won't be fulfilled, because, as mentioned above, you still have to pass `then()`
// The message printed will be `Promise { <pending> }`, followed by 'Jonas'
