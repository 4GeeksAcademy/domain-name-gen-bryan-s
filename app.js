let pronoun = ['the', 'our', 'this'];
let adj = ['great', 'big','giant'];
let noun = ['jogger', 'racoon', 'bird'];
let extensions = ['.com', '.net', '.us', '.io'];

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extensions.length; l++) {
                // Add the domain name to our list
                domainNames.push(pronoun[i] + adj[j] + noun[k] + extensions[l]);
            }
        }
    }
}

for (let i = domainNames.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  let temp = domainNames[i];
  domainNames[i] = domainNames[j];
  domainNames[j] = temp;
}

for (let i = 0; i < domainNames.length; i++) {
    console.log(domainNames[i]);
}
