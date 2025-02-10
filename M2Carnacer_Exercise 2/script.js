const person = {
    name: "Noeme Jane Carnacer",
    age: 19,
    hobbies: ["Cooking", "Music", "Traveling", "Exploring Interesting of"]
};

const jsonString = JSON.stringify(person, null, 4); // Pretty-print JSON

console.log(jsonString);

document.getElementById("showJsonBtn").addEventListener("click", function() {
    document.getElementById("jsonOutput").textContent = jsonString;
});
