// Number of Novels Books

let badge_nov = document.querySelector(".number-of-novels");
let novels = document.querySelector(".novel-books");
let number_of_novels = novels.childElementCount;

badge_nov.innerHTML =    number_of_novels +" كتب";



// Number of Biography

let badge_bio = document.querySelector(".number-of-biography");
let biography = document.querySelector(".biography-books");
let number_of_bio = biography.childElementCount;

badge_bio.innerHTML =    number_of_bio +" كتب";

// Number of Sel-dev
let badge_self = document.querySelector(".number-of-self-dev");
let self_dev = document.querySelector(".self-dev-books");
let number_of_self = self_dev.childElementCount;

badge_self.innerHTML =   number_of_self  +" كتب";