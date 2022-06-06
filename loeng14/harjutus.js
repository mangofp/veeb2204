function esimeneTervitus() {
    document.getElementById('demo').innerHTML += `
    <div>
        <h2>Esimene tervitus</h2>
    </div>
    `
}

function teineTervitus() {
    document.getElementById('demo').innerHTML += `
    <div>
        <h2>Teine tervitus</h2>
    </div>
    `
}

setTimeout(esimeneTervitus, 5000)
teineTervitus()
setTimeout(() => {
    document.getElementById('demo').innerHTML += `
    <div>
        <h2>Kolmas tervitus</h2>
    </div>
    `
},3000)