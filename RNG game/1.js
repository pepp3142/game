const rolls = document.getElementById("rolltimes");
let rollnum = 0;

function roll(){
    const result = document.getElementById("result");
    const image = document.getElementById("image");
    const rarity = document.getElementById("rarity");
    const values = [];
    const images = [];

    const value = Math.floor(Math.random()*50)+1;
    values.push(value);
    images.push(`<img src="images/${value}.png">`);

    console.log(value);

    rollnum++
    rolls.textContent = ("Rolls: "+rollnum);

    if(value == 1){
        result.textContent = ("Nerd");
        image.innerHTML = images.join('');
        rarity.textContent = ("Common");
    }
    else if (value == 9){
        result.textContent = ("Nah I'd Win");
        image.innerHTML = images.join('');
        rarity.textContent = ("Uncommon");
    }
    else if (value == 12){
        result.textContent = ("Rizz");
        image.innerHTML = images.join('');
        rarity.textContent = ("Common");
    }
    else if (value == 15){
        result.textContent = ("Sigma");
        image.innerHTML = images.join('');
        rarity.textContent = ("Rare");
    }
    else if (value == 23){
        result.textContent = ("Josh");
        image.innerHTML = images.join('');
        rarity.textContent = ("Common");
    }
    else if (value == 27){
        result.textContent = ("SPEED");
        image.innerHTML = images.join('');
        rarity.textContent = ("Legendary");
    }
    else if(value == 31){
        result.textContent = ("Chad");
        image.innerHTML = images.join('');
        rarity.textContent = ("Epic");
    }
    else if(value == 34){
        result.textContent = ("Alpha");
        image.innerHTML = images.join('');
        rarity.textContent = ("Common");
    }
    else if(value == 38){
        result.textContent = ("Mewing");
        image.innerHTML = images.join('');
        rarity.textContent = ("Uncommon");
    }
    else if(value == 44){
        result.textContent = ("ERM WHAT THE SIGMA");
        image.innerHTML = images.join('');
        rarity.textContent = ("Rare");
    }
    else if (value == 49){
        result.textContent = ("GYATT");
        image.innerHTML = images.join(' ');
        rarity.textContent = ("Uncommon");
    }
    else{
        result.textContent = ("Nothing");
        image.textContent = (" ");
        rarity.textContent = ("1 in ∞");
    }
}

//----------------------------------------------------------------------------------------------
function roll10(){
    const result = document.getElementById("result");
    const image = document.getElementById("image");
    const rarity = document.getElementById("rarity");
    const values = [];
    const images = [];

    for(let x=0;x<10;x++){
        const value = Math.floor(Math.random()*50)+1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);

        if(value == 1){
            result.textContent = ("Nerd");
            image.innerHTML = images.join('');
            rarity.textContent = ("Common");
        }
        else if (value == 9){
            result.textContent = ("Nah I'd Win");
            image.innerHTML = images.join('');
            rarity.textContent = ("Uncommon");
        }
        else if (value == 12){
            result.textContent = ("Rizz");
            image.innerHTML = images.join('');
            rarity.textContent = ("Common");
        }
        else if (value == 15){
            result.textContent = ("Sigma");
            image.innerHTML = images.join('');
            rarity.textContent = ("Rare");
        }
        else if (value == 23){
            result.textContent = ("Josh");
            image.innerHTML = images.join('');
            rarity.textContent = ("Common");
        }
        else if (value == 27){
            result.textContent = ("SPEED");
            image.innerHTML = images.join('');
            rarity.textContent = ("Legendary");
        }
        else if(value == 31){
            result.textContent = ("Chad");
            image.innerHTML = images.join('');
            rarity.textContent = ("Epic");
        }
        else if(value == 34){
            result.textContent = ("Alpha");
            image.innerHTML = images.join('');
            rarity.textContent = ("Common");
        }
        else if(value == 38){
            result.textContent = ("Mewing");
            image.innerHTML = images.join('');
            rarity.textContent = ("Uncommon");
        }
        else if(value == 44){
            result.textContent = ("ERM WHAT THE SIGMA");
            image.innerHTML = images.join('');
            rarity.textContent = ("Rare");
        }
        else if (value == 49){
            result.textContent = ("GYATT");
           image.innerHTML = images.join(' ');
            rarity.textContent = ("Uncommon");
        }
        else{
            result.textContent = ("Nothing");
            image.textContent = (" ");
            rarity.textContent = ("1 in ∞");
        }

        console.log(value);
    }
    
    rollnum+=10;
    rolls.textContent = ("Rolls: "+rollnum);
}
//-----------------------------------------------------------------------------------------------

var audio = new Audio();
audio.src = "audios/onclickaudio.mp4";