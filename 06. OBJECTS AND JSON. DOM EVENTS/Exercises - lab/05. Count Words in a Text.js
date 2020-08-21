function solve(input) {
    let wordPattern = /[\w\d_]+/g;
    let words={};
    let match;
    while((match=wordPattern.exec(input))!==null){
        if(!words.hasOwnProperty(match[0])){
            words[match[0]]=1;
        }else{
            words[match[0]]++;
        }
    }
    console.log(JSON.stringify(words)); 
}

solve("JS devs use Node.js for server-side JS.-- JS for devs.")