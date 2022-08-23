function klik() {
  let Nama = document.getElementById('nama')
  console.log(Nama.value)
  let Kelas = document.getElementById('kelas')
  console.log(Kelas.value)
  let Jurusan = document.getElementById('jurusan')
  console.log(Jurusan.value)
  let RPL = document.getElementById('rpl')
  let AK = document.getElementById('ak')
  let HTL = document.getElementById('htl')
  let createLi = document.createElement("li")
  createLi.setAttribute("class", "text-black")

  if(Jurusan.value == 'Rekayasa Perangkat Lunak'){
    RPL.appendChild(createLi).innerHTML = `-${Nama.value}, ${Kelas.value}, ${Jurusan.value}`
  }

  if(Jurusan.value == 'Akuntansi'){
    AK.appendChild(createLi).innerHTML = `-${Nama.value}, ${Kelas.value}, ${Jurusan.value}`
  }

  if(Jurusan.value == 'Perhotelan'){
    HTL.appendChild(createLi).innerHTML = `-${Nama.value}, ${Kelas.value}, ${Jurusan.value}`
  }

  Nama.value = ''
  Kelas.value = ''
  Jurusan.value = ''
}