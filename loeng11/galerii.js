const pildid = [
    './pildid/apelsin.jpg',
    './pildid/banaan.png',
    './pildid/porgand.jpg',
    'https://nort.ee/wp-content/uploads/2022/04/NORT_logo-100x100.png'
]

let puuviljadeGalerii = ''

for (let puuvili of pildid) {
    puuviljadeGalerii += `<img src="${puuvili}">`
    console.log(puuviljadeGalerii)
}

//let galeriiElement = document.getElementById("galerii")
//galeriiElement.innerHTML = puuviljadeGalerii

document.getElementById("galerii").innerHTML = puuviljadeGalerii



