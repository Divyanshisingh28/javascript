const mynumbs = [1,2,3,4,5,6,7,8,9,10]
//foreach loop values return nahi karta toh uspe operations karna mushkil hojaata hai 

const ans = mynumbs.filter( (nums) => nums> 5) // v v imp
console.log(ans)

const ans2 = mynumbs.filter((nums) => {
    //nums> 7
    return nums > 7 // fixed
})
console.log(ans2) // empty nothing returned kyuki curly braces me khudh se return likhna jaruri hai

//foreach ka use karke 
const newnumbs = []

mynumbs.forEach((key)=>{
    if(key > 4){
        newnumbs.push(key)
    }
})
console.log(newnumbs)
//excersize
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const result1 = books.filter((bk) => bk.genre === "History")
const result2 = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History")
//console.log(result1)
console.log(result2)