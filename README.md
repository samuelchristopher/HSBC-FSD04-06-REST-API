# HSBC-FSD04-06-REST-API

Repository untuk HariSenin Full Stack Developer Bootcamp Batch 4 - tugas REST API CRUD dengan ExpressJS

## Petunjuk penggunaan REST API

1. Silakan install package dengan command `npm i`
2. Setelah selesai install package, jalankan sistem dengan command `npm start`
3. Test menggunakan Postman atau sejenisnya. Berikut adalah paths beserta keterangannya
   - `POST /auth/register` untuk registrasi user account baru
     - Jika berhasil registrasi akan menghasilkan result `status: 200 OK; message:New user created`
     - Jika gagal registrasi karena duplikat akan menghasilkan result `status: 409 Conflict; message: Username Or Email Already Exist`
   - `POST /auth/login` untuk melakukan proses login dengan user yang sudah pernah diregister
     - Jika email user tidak ditemukan akan menghasilkan result `status: 404 Not Found; message: Email Not Registered`
     - Jika password yang diberikan salah, akan menghasilkan result `status: 400 Bad Request; message: Invalid password`
     - Jika email dan password user benar akan menghasilkan result `status: 200 OK; message: Login success`, beserta data JWT tokennya
   - `GET /users/` untuk menarik seluruh data user yang ada di database
   - `GET /users/me` untuk menarik data user berdasarkan token yang diberikan (token didapatkan setelah melakukan proses login)
   - `GET /users/:id` untuk menarik dara user berdasarkan id yang diberikan
     - Jika ID tidak ditemukan akan menghasilkan result `status: 404 Not Found; message: ID Not Found`
   - `PUT /users/:id` untuk memperbarui data (update) berdasarkan id yang diberikan
     - Jika ID tidak ditemukan akan menghasilkan result `status: 404 Not Found; message: ID Not Found`
   - `DELETE /users/:id` untuk menghapus data (delete) berdasarkan id yang diberikan
     - Jika ID tidak ditemukan akan menghasilkan result `status: 404 Not Found; message: ID Not Found`
   - Jika melakukan koneksi REST API selain paths yang diberikan di atas, akan menghasilkan result `404 Not Found`
   - Jika melakukan koneksi REST API ke root path `/`, response akan menghasilkan output HTML yang dapat dibuka secara langsung di browser
