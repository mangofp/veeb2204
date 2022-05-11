let arvatudVarvid = []


function valjastaTeade(teade) {
	let valjundEl = document.getElementById("valjund");
	console.log(teade);
	valjundEl.innerHTML += "<div>" + teade + "</div>";
}

function valjastaArvamisteAjalugu() {
    let valjundEl = document.getElementById("valjund");
    valjundEl.innerHTML += "<h3>Värvide arvamiste ajalugu</h3>"
    for (let index = 0; index < arvatudVarvid.length; index++) {
        valjundEl.innerHTML += `
        <div>
            ${index}. arvamine - ${arvatudVarvid[index]}
        </div> `
    }
}


function varviArvamine() {
	console.log("Programm alustab tööd");
    let sisendElement = document.getElementById("sisend")
	let sisendTekst = sisendElement.value
	let valjundElement = document.getElementById("valjund");
    valjundElement.innerHTML = ''
    arvatudVarvid.push(sisendTekst)
    valjastaArvamisteAjalugu()

    const lemmikVarvid = [
        "roheline",
        "sinine",
        "punane",
        "roosa"
    ]

	if (lemmikVarvid.includes(sisendTekst)) {
		valjastaTeade("Õnnitlused - arvasid ära minu lemmikvärvi " + sisendTekst);
		valjundElement.innerHTML += `<img src="apelsin.jpg" width="300" alt="apelsin">`;
	} 
    
    else if (!sisendTekst) {
        valjastaTeade("Sisesta värv")
    }  else {
		valjundElement.innerHTML =
			"<div>Värv " + sisendTekst + " ei ole minu lemmikvärv</div>";
		for (let index = 0; index < 5; index++) {
			valjundElement.innerHTML +=
				"<p>" + (index + 1) + ". " + sisendTekst + "</p>";
		}
	}

	console.log("Programm lõpetab töö");
}

function valjastaRuut(x) {
	console.log(x * x);
}
