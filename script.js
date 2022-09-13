function handleSaveStudent() {
  let fname = document.getElementById('name')
  let sname = document.getElementById('sname')
  let placeOfB = document.getElementById('bplace')
  let parcour = document.getElementById('parc')
  let sex = document.getElementsByName('sex')
  let country = document.getElementById('nat')
  let city = document.getElementById('town')
  let gender
  for (var i = 0, length = sex.length; i < length; i++) {
    if (sex[i].checked) {
      gender = sex[i].value
      // only one gender can be selected
      break
    }
  }
  let poid = document.getElementById('weight')
  let height = document.getElementById('height')
  let dateOfBirth = document.getElementById('bday')

  // showing the students information on the user interface

  let studentsInfoContainer = document.createElement('div')
  studentsInfoContainer.classList = 'col-6'
  let studentsName = document.createElement('div')
  let studentplaceOfB = document.createElement('div')
  let studentsPar = document.createElement('div')
  let studentsWeight = document.createElement('div')
  let studentsGender = document.createElement('div')
  let studentsDateOfB = document.createElement('div')
  let studentsNationality = document.createElement('div')
  let studentsCity = document.createElement('div')
  studentsName.innerHTML = `<div  ><span class="fw-bold">Nom : </span>${fname.value + ' ' + sname.value} </div>`
  studentplaceOfB.innerHTML = `<div><span class="fw-bold">Lieu de naissance : </span>${placeOfB.value}</div>`
  studentsPar.innerHTML = `<div  ><span class="fw-bold">Parcours : </span> ${parcour.value} </div>`
  studentsWeight.innerHTML = `<div ><span class="fw-bold">Poids : </span> ${poid.value}Kg, <span class="fw-bold">Taille : </span>${height.value} M </div>`
  studentsGender.innerHTML = `<div><span class="fw-bold">Sexe : </span> ${gender} </div>`
  studentsDateOfB.innerHTML = `<div ><span class="fw-bold">Date de naissance : </span> ${dateOfBirth.value} </div>`
  studentsNationality.innerHTML = `<div  ><span class="fw-bold">Nationality : </span> ${country} </div>`
  studentsCity.innerHTML = `<div  ><span class="fw-bold">Ville : </span> ${city} </div>`

  // Appending to the parent container in HTML
  studentsInfoContainer.appendChild(studentsName)
  studentsInfoContainer.appendChild(studentplaceOfB)
  studentsInfoContainer.appendChild(studentsPar)
  studentsInfoContainer.appendChild(studentsWeight)
  studentsInfoContainer.appendChild(studentsGender)
  studentsInfoContainer.appendChild(studentsDateOfB)
  studentsInfoContainer.appendChild(studentsNationality)
  studentsInfoContainer.appendChild(studentsCity)
  let markContainer = document.getElementById('markContainer')

  // appending the subjects and notes section
  let tt = markContainer.innerHTML
  let studentMarkSection = document.createElement('div')
  studentMarkSection.classList = 'col-6'
  let studentMarkTable = document.createElement('table')
  studentMarkTable.classList = 'table table-bordered'
  studentMarkTable.innerHTML = tt
  studentMarkSection.appendChild(studentMarkTable)

  // append to main container
  let studentsInfoRow = document.getElementById('studentsInfoRow')
  let row = document.createElement('div')
  row.classList = 'row border mb-3 p-2'
  row.appendChild(studentsInfoContainer)
  row.appendChild(studentMarkSection)
  studentsInfoRow.appendChild(row)

  // clearing data from input fields
  fname.value = ''
  placeOfB.value = ''
  parcour.value = ''
  sex.value = ''
  gender.value = ''
  poid.value = ''
  dateOfBirth.value = ''
  height.value = ''
  sname.value = ''
  markContainer.innerHTML = ''

  // console.log()
}

function handleSaveMark() {
  let markContainer = document.getElementById('markContainer')
  let tr = document.createElement('tr')
  tr.classList = 'markData'
  let td1 = document.createElement('td')
  let td2 = document.createElement('td')
  let td3 = document.createElement('td')
  let subject = document.getElementById('subject')
  let note = document.getElementById('note')
  td1.innerHTML = subject.value
  td2.innerHTML = note.value
  td3.innerHTML = `<div  class="btn btn-sm btn-secondary del " >supprimer</div>`
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  markContainer.appendChild(tr)
  subject.value = ''
  note.value = ''
  console.log(document.querySelector('.markData'))
  td3.addEventListener('click', () => {
    tr.innerHTML = ''
  })

}







