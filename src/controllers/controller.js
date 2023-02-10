exports.main = (req, res) => {
  const mainSite =
    '<h1>Selamat Datang di REST API milik Samuel Christopher Santo</h1>' +
    '<h2>Tugas harisenin.com Fullstack Developer Batch 4 - Tugas REST API</h2>' +
    '<h3>Silakan ikuti petunjuk berikut.</h3>' +
    '<ol>' +
    '<li>Silakan install package dengan command <code style="background-color:yellow;">npm i</code></li>' +
    '<li>Setelah selesai install package, jalankan sistem dengan command <code style="background-color:yellow;">npm start</code></li>' +
    '<li>Test menggunakan Postman atau sejenisnya. Berikut adalah paths beserta keterangannya<ol>' +
    '<li><code style="background-color:yellow;">POST /auth/register</code> untuk registrasi user account baru</li>' +
    '<li><code style="background-color:yellow;">POST /auth/login</code> untuk melakukan proses login dengan user yang sudah pernah diregister</li>' +
    '<li><code style="background-color:yellow;">GET /users/</code> untuk menarik seluruh data user yang ada di database</li>' +
    '    <li><code style="background-color:yellow;">GET /users/me</code> untuk menarik data user berdasarkan token yang diberikan (token didapatkan setelah melakukan proses login)</li>' +
    '    <li><code style="background-color:yellow;">GET /users/:id</code> untuk menarik dara user berdasarkan id yang diberikan</li>' +
    '    <li><code style="background-color:yellow;">PUT /users/:id</code> untuk memperbarui data (update) berdasarkan id yang diberikan</li>' +
    '    <li><code style="background-color:yellow;">DELETE /users/:id</code> untuk menghapus data (delete) berdasarkan id yang diberikan</li>' +
    '    </ol>' +
    '    </li>' +
    '    <li>Jika melakukan koneksi REST API selain paths yang diberikan di atas, akan menghasilkan result <code style="background-color:yellow;">404 Not Found</code></li>' +
    '    <li>Jika melakukan koneksi REST API ke root path <code style="background-color:yellow;">/</code>, response akan menghasilkan output HTML yang dapat dibuka secara langsung di browser</li>' +
    '    </ol>';
  res.send(mainSite);
};
