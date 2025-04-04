const coding = ["js", "py", "rb", "cpp"];
coding.forEach( function(element){
    console.log(element); // js, py, rb, cpp
});
coding.forEach( (element) => {
    console.log(element); // js, py, rb, cpp
});

const myCoding = [
    {
        language: "JavaScript",
        fileName: "script.js",
    },
    {
        language: "Python",
        fileName: "script.py",
    },
    {
        language: "Ruby",
        fileName: "script.rb",
    }
]
myCoding.forEach( function(element){
    console.log(element.language); // JavaScript, Python, Ruby
});