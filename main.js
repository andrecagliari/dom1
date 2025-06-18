function generaColoreCasuale() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function cambiaColori() {
  document.getElementById('p1').style.color = generaColoreCasuale()
  document.getElementById('p2').style.color = generaColoreCasuale()
  document.getElementById('p3').style.color = generaColoreCasuale()
}

function grassetto() {
  const paragrafi = document.querySelectorAll('p')
  paragrafi.forEach(p => p.style.fontWeight = 'bold')
}

let visibili = true

function toggleParagrafi() {
  const paragrafi = document.querySelectorAll('p')
  paragrafi.forEach(p => {
    if (visibili) {
      p.classList.add('nascosto')
    } else {
      p.classList.remove('nascosto')
    }
  })
  visibili = !visibili
}
