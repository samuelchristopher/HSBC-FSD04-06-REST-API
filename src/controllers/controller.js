exports.main = (req, res) => {
  const mainSite =
    '<h1>Selamat Datang di REST API milik Samuel Christopher Santo</h1>' +
    '<h2>Tugas harisenin.com Fullstack Developer Batch 4 - Tugas REST API</h2>' +
    '<h3>Silakan ikuti petunjuk berikut.</h3>' +
    '    <ol>' +
    '<li>Silakan install package dengan command <code style="background-color:lightgrey;">npm i</code></li>' +
    '<li>Setelah selesai install package, jalankan sistem dengan command <code style="background-color:lightgrey;">npm start</code></li>' +
    '<li>Test menggunakan Postman atau sejenisnya. Berikut adalah paths beserta keterangannya<ul>' +
    '<li><code style="background-color:lightgrey;">POST /auth/register</code> untuk registrasi user account baru<ul>' +
    '<li>Jika berhasil registrasi akan menghasilkan result <code style="background-color:lightgrey;">status: 200 OK; message:New user created</code></li>' +
    '<li>Jika gagal registrasi karena duplikat akan menghasilkan result <code style="background-color:lightgrey;">status: 409 Conflict; message: Username Or Email Already Exist</code></li>' +
    '</ul>' +
    '</li>' +
    '<li><code style="background-color:lightgrey;">POST /auth/login</code> untuk melakukan proses login dengan user yang sudah pernah diregister<ul>' +
    '<li>Jika email user tidak ditemukan akan menghasilkan result <code style="background-color:lightgrey;">status: 404 Not Found; message: Email Not Registered</code></li>' +
    '<li>Jika password yang diberikan salah, akan menghasilkan result <code style="background-color:lightgrey;">status: 400 Bad Request; message: Invalid password</code></li>' +
    '<li>Jika email dan password user benar akan menghasilkan result <code style="background-color:lightgrey;">status: 200 OK; message: Login success</code>, beserta data JWT tokennya</li>' +
    '</ul>' +
    '</li>' +
    '<li><code style="background-color:lightgrey;">GET /users/</code> untuk menarik seluruh data user yang ada di database</li>' +
    '<li><code style="background-color:lightgrey;">GET /users/me</code> untuk menarik data user berdasarkan token yang diberikan (token didapatkan setelah melakukan proses login)</li>' +
    '<li><code style="background-color:lightgrey;">GET /users/:id</code> untuk menarik dara user berdasarkan id yang diberikan<ul>' +
    '<li>Jika ID tidak ditemukan akan menghasilkan result <code style="background-color:lightgrey;">status: 404 Not Found; message: ID Not Found</code></li>' +
    '</ul>' +
    '</li>' +
    '<li><code style="background-color:lightgrey;">PUT /users/:id</code> untuk memperbarui data (update) berdasarkan id yang diberikan<ul>' +
    '<li>Jika ID tidak ditemukan akan menghasilkan result <code style="background-color:lightgrey;">status: 404 Not Found; message: ID Not Found</code></li>' +
    '</ul>' +
    '</li>' +
    '<li><code style="background-color:lightgrey;">DELETE /users/:id</code> untuk menghapus data (delete) berdasarkan id yang diberikan<ul>' +
    '<li>Jika ID tidak ditemukan akan menghasilkan result <code style="background-color:lightgrey;">status: 404 Not Found; message: ID Not Found</code></li>' +
    '</ul>' +
    '</li>' +
    '<li>Jika melakukan koneksi REST API selain paths yang diberikan di atas, akan menghasilkan result <code style="background-color:lightgrey;">404 Not Found</code></li>' +
    '<li>Jika melakukan koneksi REST API ke root path <code style="background-color:lightgrey;">/</code>, response akan menghasilkan output HTML yang dapat dibuka secara langsung di browser</li>' +
    '</ul>' +
    '</li>' +
    '</ol>';
  res.send(mainSite);
};
