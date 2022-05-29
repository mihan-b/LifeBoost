const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateLife);
});

const ageInput = document.getElementById("age");
ageInput.addEventListener("change",calculateLife);


function calculateLife(){
    let age = parseFloat(ageInput.value);
    let yearsLeft = 83 - age;
    let daysVeget = document.getElementById("veget").value;
    let daysVegan = document.getElementById("vegan").value;
    let daysActive = document.getElementById("active").value;
    let daysFarm= document.getElementById("farm").value;

    ageInput.value = age.toFixed(0);

    let boostVeget = parseFloat((yearsLeft * (1 * daysVeget/100)).toFixed(1));
    let boostVegan = parseFloat((yearsLeft * (1.143 * daysVegan/100)).toFixed(1));
    let boostActive = parseFloat((yearsLeft * (1 * daysActive/100)).toFixed(1));
    let boostFarm = parseFloat((yearsLeft * (0.429 * daysFarm/100)).toFixed(1));
    
    let totalBoost = parseFloat((boostVeget + boostVegan + boostActive + boostFarm).toFixed(1));
    let total = parseFloat((83 + totalBoost).toFixed(1));


    document.getElementById("boost-amount").textContent = ` ${totalBoost}`;
    document.getElementById("total-amount").textContent = ` ${total}`;
    
    document.getElementById("days-veget").textContent = `${daysVeget}`;
    document.getElementById("days-vegan").textContent = `${daysVegan}`;
    document.getElementById("days-active").textContent = `${daysActive}`;
    document.getElementById("days-farm").textContent = `${daysFarm}`;

 
}
calculateLife();
