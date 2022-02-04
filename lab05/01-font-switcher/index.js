const makeBigger = () => {
   document.querySelector("h1, .content").style.fontSize = "larger"
   // alert('make bigger!');
};

const makeSmaller = () => {
   document.querySelector("h1, .content").style.fontSize = "smaller"
   // alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

