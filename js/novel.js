let word = [];
for (let i = 97; i < 97 + 26; i++) {
    word.push(String.fromCharCode(i));
}
const n1 = word[Math.floor(Math.random() * 26 + 1)];
const n2 = word[Math.floor(Math.random() * 26 + 1)];
const n3 = word[Math.floor(Math.random() * 26 + 1)];
console.log(n1, n2, n3);