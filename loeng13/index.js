
let ylesanne1 = {kirjeldus: 'tee hommikuvõimlemist', kasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella 8-t'}
let ylesanne2 = {kirjeldus: 'jaluta koeraga', kasTehtud: false, tahtsus: 8, tahtaeg: 'enne kella 8-t'}
console.log(ylesanne1)

//koonda ylesanded massiivi
let ylesanded = [ylesanne1, ylesanne2]

ylesanded.push({kirjeldus: 'tee hommikusöök', kasTehtud: false, tahtsus: 8, tahtaeg: 'enne kella 8-t'})

//koosta ühe ülesande kirjelduse html element
function tagastaYlesanneHtml(index) {
    let tehtud = ''
    let tehtudKlass = ''
    if (ylesanded[index].kasTehtud) {
        tehtud = 'checked'
        tehtudKlass = 'class="tehtud"'
    }
    return `
    <div ${tehtudKlass}>
        <input type="checkbox" ${tehtud}>
        Oluline ülesanne: ${ylesanded[index].kirjeldus} ${ylesanded[index].tahtaeg}
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
