
let ylesanne1 = {kirjeldus: 'tee hommikuvõimlemist', kasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella 8-t'}
let ylesanne2 = {kirjeldus: 'jaluta koeraga', kasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella 8-t'}
console.log(ylesanne1)

//koonda ylesanded massiivi
let ylesanded = [
    ylesanne1, 
    ylesanne2,
    {kirjeldus: 'mine tööle', kasTehtud: false, tahtsus: 8, tahtaeg: 'enne kella 9-t'}
]

ylesanded.push({kirjeldus: 'tee hommikusöök', kasTehtud: false, tahtsus: 8, tahtaeg: 'enne kella 8-t'})

//koosta ühe ülesande kirjelduse html element
function tagastaYlesanneHtml(index) {
    let tehtud = ''
    let tehtudKlass = ''
    let tahtisKlass = ''
    if (ylesanded[index].kasTehtud) {
        tehtud = 'checked'
        tehtudKlass = 'class="tehtud"'
    }
    if (ylesanded[index].tahtsus > 8) {
        tahtisKlass = 'class="tahtis"'
    }
    return `
    <div ${tehtudKlass}>
        <input type="checkbox" ${tehtud}>
        <span ${tahtisKlass}>
            Oluline ülesanne: ${ylesanded[index].kirjeldus} ${ylesanded[index].tahtaeg} Tähtsus: ${ylesanded[index].tahtsus}
        </span>
    </div>
    `
    //Ülemine template tagastab sarnase väärtuse:
    //return '<div><input type="checkbox" >Oluline ülesanne: ' + ylesanded[index].kirjeldus + //' ' + ylesanded[index].tahtaeg + '</div>'
}

//tee tsükkel mis väljastaks kõik objektid massiivist
const ylesandedElement = document.getElementById('ylesanded')
for (let i = 0; i < ylesanded.length; i++) {
   ylesandedElement.innerHTML += tagastaYlesanneHtml(i)
}

//funktsioon ülesande andmete lugemiseks ja massiivi lisamiseks
function lisaYlesanne() {
    const ylesanne = document.getElementById('kirjeldus')
    const tahtaeg = document.getElementById('aeg')
    const tahtsus = document.getElementById('tahtsus')
    const uusYlesanne = {
        kirjeldus: ylesanne.value, 
        kasTehtud: false, 
        tahtsus: parseInt(tahtsus.value), 
        tahtaeg: tahtaeg.value 
    }
    ylesanded.push(uusYlesanne)
    ylesandedElement.innerHTML += tagastaYlesanneHtml(ylesanded.length - 1) 
    ylesanne.value = ''
    tahtaeg.value = ''
}
