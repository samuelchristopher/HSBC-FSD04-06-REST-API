# HSBC-FSD04-06-REST-API

Repository untuk HariSenin Full Stack Developer Bootcamp Batch 4 - tugas REST API CRUD dengan ExpressJS

## Petunjuk penggunaan REST API

1. Silakan install package dengan command `npm i`
2. Setelah selesai install package, jalankan sistem dengan command `npm start`
3. Test menggunakan Postman atau sejenisnya. Berikut adalah paths beserta keterangannya
   1. `POST /auth/register` untuk registrasi user account baru
   2. `POST /auth/login` untuk melakukan proses login dengan user yang sudah pernah diregister
   3. `GET /users/` untuk menarik seluruh data user yang ada di database
   4. `GET /users/me` untuk menarik data user berdasarkan token yang diberikan (token didapatkan setelah melakukan proses login)
   5. `GET /users/:id` untuk menarik dara user berdasarkan id yang diberikan
   6. `PUT /users/:id` untuk memperbarui data (update) berdasarkan id yang diberikan
   7. `DELETE /users/:id` untuk menghapus data (delete) berdasarkan id yang diberikan
4. Jika melakukan koneksi REST API selain paths yang diberikan di atas, akan menghasilkan result `404 Not Found`
5. Jika melakukan koneksi REST API ke root path `/`, response akan menghasilkan output HTML yang dapat dibuka secara langsung di browser
