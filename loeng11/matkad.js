console.log("Matkad")

const matk1 = {
    nimetus: "Kevadine matk ümber Pühajärve",
    kuupaev: "20.05.2022",
    kohtadeArv: 25,
    pildiUrl: "./pildid/apelsin.jpg"
}

const matk2 = {
    nimetus: "Kevadine rattamatk Kõrvemaal",
    kuupaev: "25.05.2022",
    kohtadeArv: 25,
    pildiUrl: "./pildid/porgand.jpg"
}

const matk3 = {
    nimetus: "Kepikõnnimatk Pärnus",
    kuupaev: "25.06.2022",
    kohtadeArv: 10,
    pildiUrl: "./pildid/banaan.png"
}

const matk4 = {
    nimetus: "Süstamatk ümber Hiiumaa",
    kuupaev: "05.07.2022",
    kohtadeArv: 10,
    pildiUrl: "./pildid/porgand.jpg"
}

const matkad = [
    matk1,
    matk2,
    matk3,
    matk4
]


function matkaTervitus(matk) {
    console.log(`Tere tulemast matkale "${matk.nimetus}" mis algab ${matk.kuupaev}`)
    console.log(`Kokku saab matkale tulla ${matk.kohtadeArv} osalejat`)
    const matkadElement = document.getElementById("matkad")
    matkadElement.innerHTML += `
    <div>
        <h2>${matk.nimetus}</h2>
        <img src="${matk.pildiUrl}" width="300">
        <div>Matka toimumisaeg: ${matk.kuupaev}</div>
        <div>Kohtade arv: ${matk.kohtadeArv}</div>
    </div>
    `
}


//matkaTervitus(matk1)
//matkaTervitus(matk2)
//matkaTervitus(matk3)

for (let matkaObjekt of matkad) {
    matkaTervitus(matkaObjekt)
}

function lisaMatk() {
    const uusMatk = {
        nimetus: document.getElementById("matka_nimetus").value,
        kuupaev: document.getElementById("matka_kuupaev").value,
        kohtadeArv: document.getElementById("matka_osalejaid").value,
        pildiUrl: "./pildid/porgand.jpg"
    }
    matkad.push(uusMatk)
    console.log(matkad)
    matkaTervitus(uusMatk)
}
