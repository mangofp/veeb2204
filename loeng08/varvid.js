

    let sisendTekst = prompt("Sisesta enda lemmikvärv")
    let valjundElement = document.getElementById("valjund")

    if (sisendTekst == "roheline"  ) {
        let valjastatavTekst = "Palju õnne arvasid ära minu lemmikvärvi."   
        valjundElement.innerHTML += "<div>" + valjastatavTekst + "</div>"
        valjundElement.innerHTML += `<img src="apelsin.jpg" width="300" alt="apelsin">`
    
    } else {
        valjundElement.innerHTML = "<div>Värv " + sisendTekst + " ei ole minu lemmikvärv</div>"
        for (let index = 0; index < 5; index++) {
            valjundElement.innerHTML += "<p>" + (index + 1) + '. ' + sisendTekst + "</p>" 
        }
    }




