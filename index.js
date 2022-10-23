const playButton = document.getElementById('playBtn');
const playgroundDiv = document.getElementById("playground");
const counterDiv = document.getElementById("letterCounter");
const characterDiv = document.getElementById("character");




playButton.addEventListener('click', () => {

    const stringGenerated = generateRandomString().toUpperCase();
    var charAtRandom = pickCharAtRandom(stringGenerated);

    characterDiv.innerHTML = `${charAtRandom}`;

    let countOfRndCharInRndString = pleaseCount(charAtRandom, stringGenerated);
    counterDiv.innerHTML = `${countOfRndCharInRndString}`;
    
    const arrayOfStrings = [...stringGenerated];
    playgroundDiv.innerHTML = " ";
    
    playgroundDiv.style.fontSize = `${someRandomFontSize(20, 60)}px`;

    for (var i = 0 ; i < stringGenerated.length ; i++)
    {
        const randomPos = someRandomPos(stringGenerated);
        arrayOfStrings.splice(randomPos, 0, " ");
    }

    arrayOfStrings.forEach((element, index) => {
        
        let letterBox = document.createElement('div');
        letterBox.innerHTML += `${element}`;
        letterBox.id = `${element}-${index}`;
        letterBox.className = 'item';
        
        playgroundDiv.appendChild(letterBox);

        letterBox.addEventListener('click', (event) => {

        let onlyTheChar = event.target.id.split('-')[0];
        if (onlyTheChar == charAtRandom) {

            if (countOfRndCharInRndString > 0) {

                countOfRndCharInRndString--;
                counterDiv.innerHTML = `${countOfRndCharInRndString}`;
    
                node = document.getElementById(event.target.id);
                //node.parentNode.removeChild(node);
                node.style.color = "green";
                node.style.pointerEvents = "none";
            }
            
        }
        else {

            node = document.getElementById(event.target.id);
            //node.parentNode.removeChild(node);
            node.style.color = "red";
            node.style.pointerEvents = "none";
        }
            
        });
        
    });
    
    
});

function generateRandomString()
{

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789";
	var lenString = 200;
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
    var charAtRandomPos = randomString.charAt(Math.floor(Math.random() * (max - min + 1) ) + min);
    if(charAtRandomPos == '')
    {
        charAtRandomPos = randomString.charAt(Math.floor(Math.random() * (max - min + 1) ) + min);
    }
        
    return charAtRandomPos;
}

function pleaseCount(rndChar, rndString)
{
    return count = [...rndString].filter(x => x === rndChar).length;
}


function someRandomPos(rndString)
{
    const min = 0;
    const max = rndString.length;
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
}

function someRandomFontSize(minFontSize, maxFontSize)
{
    return (Math.floor(Math.random() * (maxFontSize - minFontSize + 1) ) + minFontSize);
}

 