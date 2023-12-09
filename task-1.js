function slugify(title) {
    const titleLower = title.toLowerCase();
    const arrayOfWords = titleLower.split(" "); 
    const slug = arrayOfWords.join("-")

    return slug; 
}

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));