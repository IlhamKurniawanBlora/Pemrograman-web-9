// References
const createDataButton = document.getElementById('createDataButton');
const searchButton = document.getElementById('searchButton');
const modalForm = document.getElementById('modalForm');
const modalView = document.getElementById('modalView');
const closeButtons = document.querySelectorAll('.close');
const formMahasiswa = document.getElementById('formMahasiswa');
const nimInput = document.getElementById('nim');
const namaMahasiswaInput = document.getElementById('namaMahasiswa');
const namaProdiInput = document.getElementById('namaProdi');
const submitButton = document.getElementById('submitButton');
const searchNim = document.getElementById('searchNim');
const viewNim = document.getElementById('viewNim');
const viewNamaMahasiswa = document.getElementById('viewNamaMahasiswa');
const viewNamaProdi = document.getElementById('viewNamaProdi');

// Open Modal Form for Create
createDataButton.addEventListener('click', () => {
  modalForm.style.display = 'block';
  formMahasiswa.reset();
  submitButton.textContent = 'Tambah';
});

// Open Modal for View
searchButton.addEventListener('click', async () => {
  const nim = searchNim.value.trim();
  if (!nim) return alert('Masukkan NIM untuk mencari!');

  try {
    const response = await fetch(`http://localhost:3000/mahasiswa/${nim}`);
    if (!response.ok) throw new Error('Mahasiswa tidak ditemukan');
    const mahasiswa = await response.json();
    viewNim.textContent = mahasiswa.nim;
    viewNamaMahasiswa.textContent = mahasiswa.nama;
    viewNamaProdi.textContent = mahasiswa.prodi;
    modalView.style.display = 'block';
  } catch (error) {
    alert(error.message);
  }
});

// Close Modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalForm.style.display = 'none';
    modalView.style.display = 'none';
  });
});

// Handle Form Submit
formMahasiswa.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nim = nimInput.value.trim();
  const namaMahasiswa = namaMahasiswaInput.value.trim();
  const namaProdi = namaProdiInput.value.trim();

  try {
    const method = submitButton.textContent === 'Tambah' ? 'POST' : 'PUT';
    const url = method === 'POST' ? 'http://localhost:3000/mahasiswa' : `http://localhost:3000/mahasiswa/${nim}`;
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nim, nama: namaMahasiswa, prodi: namaProdi })
    });
    if (!response.ok) throw new Error('Gagal menyimpan data');
    alert('Data berhasil disimpan');
    modalForm.style.display = 'none';
    loadTable();
  } catch (error) {
    alert(error.message);
  }
});

// Load Data into Table
async function loadTable() {
  try {
    const response = await fetch('http://localhost:3000/mahasiswa');
    const mahasiswaList = await response.json();
    const tableBody = document.querySelector('#tabelMahasiswa tbody');
    tableBody.innerHTML = '';
    mahasiswaList.forEach(mahasiswa => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${mahasiswa.nim}</td>
        <td>${mahasiswa.nama}</td>
        <td>${mahasiswa.prodi}</td>
        <td>
          <button class='btn btn-edit' onclick="editMahasiswa('${mahasiswa.nim}', '${mahasiswa.nama}', '${mahasiswa.prodi}')">Edit</button>
          <button class='btn btn-delete' onclick="deleteMahasiswa('${mahasiswa.nim}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    alert('Gagal memuat data');
  }
}

// Edit Mahasiswa
function editMahasiswa(nim, nama, prodi) {
  modalForm.style.display = 'block';
  nimInput.value = nim;
  namaMahasiswaInput.value = nama;
  namaProdiInput.value = prodi;
  submitButton.textContent = 'Update';
}

// Delete Mahasiswa
async function deleteMahasiswa(nim) {
  if (!confirm('Yakin ingin menghapus data?')) return;

  try {
    const response = await fetch(`http://localhost:3000/mahasiswa/${nim}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Gagal menghapus data');
    alert('Data berhasil dihapus');
    loadTable();
  } catch (error) {
    alert(error.message);
  }
}

// Load data awal
loadTable();
