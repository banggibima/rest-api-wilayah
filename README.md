# Mulai

```bash
# Menginstal dependencies server
npm install

# Menjalankan server di http://localhost:5000
npm run server
```

```bash
# Menjalankan REST API dengan cara menulis perintah http://localhost:5000 
# lalu ditambahkan dengan perintah URL yang telah ditulis dibawah 
+--------+---------------+-----------------------------------------------------------+
| Metode | URL           | Aksi                                                      |
+--------+---------------+-----------------------------------------------------------+
| GET    | /district/    | Membaca semua data kelurahan / desa                       |
| POST   | /district/add | Membuat sebuah data kelurahan / desa                      |
| GET    | /district/id  | Membaca sebuah data kelurahan / desa berdasarkan id-nya   |
| PUT    | /district/id  | Mengubah sebuah data kelurahan / desa berdasarkan id-nya  |
| DELETE | /district/id  | Menghapus sebuah data kelurahan / desa berdasarkan id-nya |
| GET    | /island/      | Membaca semua data pulau                                  |
| POST   | /island/add   | Membuat sebuah data pulau                                 |
| GET    | /island/id    | Membaca sebuah data pulau berdasarkan id-nya              |
| PUT    | /island/id    | Mengubah sebuah data pulau berdasarkan id-nya             |
| DELETE | /island/id    | Menghapus sebuah data pulau berdasarkan id-nya            |
| GET    | /province/    | Membaca semua data provinsi                               |
| POST   | /province/add | Membuat sebuah data provinsi                              |
| GET    | /province/id  | Membaca sebuah data provinsi berdasarkan id-nya           |
| PUT    | /province/id  | Mengubah sebuah data provinsi berdasarkan id-nya          |
| DELETE | /province/id  | Menghapus sebuah data provinsi berdasarkan id-nya         |
| GET    | /regency/     | Membaca semua data kota / kabupaten                       |
| POST   | /regency/add  | Membuat sebuah data kota / kabupaten                      |
| GET    | /regency/id   | Membaca sebuah data kota / kabupaten berdasarkan id-nya   |
| PUT    | /regency/id   | Mengubah sebuah data kota / kabupaten berdasarkan id-nya  |
| DELETE | /regency/id   | Menghapus sebuah data kota / kabupaten berdasarkan id-nya |
+--------+---------------+-----------------------------------------------------------+
```

```bash
# Struktur file
.
├── controllers
│   ├── District.js
│   ├── Island.js
│   ├── Province.js
│   └── Regency.js
├── models
│   ├── District.js
│   ├── Island.js
│   ├── Province.js
│   └── Regency.js
├── routes
│   ├── District.js
│   ├── Island.js
│   ├── Province.js
│   └── Regency.js
├── .babelrc
├── .env
├── .gitignore
├── app.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```