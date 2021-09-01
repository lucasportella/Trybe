
// const num = '1';
// if (parseInt(num) === num ) {
//     console.log('aaaaa');
// }

// if (!a) {
//     console.log('é nulo');
// }

// console.log(Boolean(!null));

// falsy:
// ""
// NaN
// false
// 0
// undefined
// null


// const a = 3
// console.log(Boolean(a.length));


// if (Boolean(2)) {
//     console.log(('trueeee'));
// }


// // console.log(5 == true);

// if (Boolean(2)) {
//     console.log(('trueeee'));
// }

// if (null === undefined) {
//     console.log(('TRUE'));
// }

// console.log(1 == '1');
// console.log(1 == [1]);
// console.log('1' == [1]);




























const book = '33'

const isValid = async (book) => {
    const { title, author_id } = book;
    if (!title || title.length < 3 || typeof title !== 'string'|| !author_id) { return false}
    return true;
}


console.log(isValid(book));
