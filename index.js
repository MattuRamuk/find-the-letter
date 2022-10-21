const button = document.getElementById('playBtn');
const divElement = document.getElementById("playground");
const counterDiv = document.getElementById("letterCounter");
const characterDiv = document.getElementById("character");



button.addEventListener('click', () => {
    const stringGenerated = generateRandomString().toUpperCase();
    var charAtRandom = pickCharAtRandom(stringGenerated);

    characterDiv.innerHTML = `${charAtRandom}`;

    let countOfRndCharInRndString = pleaseCount(charAtRandom, stringGenerated);
    counterDiv.innerHTML = `${countOfRndCharInRndString}`;
    
    console.log('count -> ', count)
    const arrayOfStrings = [...stringGenerated];
    divElement.innerHTML = " ";
    
    arrayOfStrings.forEach((element) => {
       
        let letterBox = document.createElement('span');
        letterBox.innerHTML += `${element}`;
        letterBox.id = `${element}`;
        divElement.appendChild(letterBox);
        letterBox.addEventListener('click', (event) => {
            
            if(event.target.id == charAtRandom)
            {
                
                console.log('MATCH')
                countOfRndCharInRndString--;
                counterDiv.innerHTML = `${countOfRndCharInRndString}`;

                element = document.getElementById(letterBox.id);
                element.parentNode.removeChild(element);
                
                
            }
            else {
                console.log('NOT MATCH')
            }

        });
        
    });
    
    
});

function generateRandomString()
{

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var lenString = 40;
	var randomstring = '';

           
	for (var i=0; i<lenString; i++) {
		var rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum, rnum+1);
	}
    return randomstring;
}

function pickCharAtRandom(randomString)
{
    const min = 0;
    const max = randomString.length;
    var charAtRandomPos = randomString.charAt(Math.floor(Math.random() * (max - min + 1) ) + min);;
    if(charAtRandomPos == '')
    {
        charAtRandomPos = randomString.charAt(Math.floor(Math.random() * (max - min + 1) ) + min);;
    }
        
    return charAtRandomPos;
}

function pleaseCount(rndChar, rndString)
{
    return count = [...rndString].filter(x => x === rndChar).length;
}


 