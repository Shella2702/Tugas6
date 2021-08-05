//exercise 1

let kucing = {
    Nama: 'Kucing',
    Kaki: 4,
    Spesies: 'Beranak',
    Warna: ['horen', 'putih', 'hitam'],
    Makanan: ['Ikan', 'Ayam', 'whiskas'],
    Suara: 'Miaaaaw',
    Keahlian: () => {
        return "Kawin";
    }
};
console.log("Nama: ", kucing.Nama);
console.log("Jumlah Kaki: ", kucing.Kaki);
console.log("Spesies: ", kucing.Spesies);
console.log("Warna: ", kucing.Warna);
console.log("Makanan: ", kucing.Makanan);
console.log("Suara: ", kucing.Suara);
console.log("Keahlian: ", kucing.Keahlian());

//Exercise 2

const data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", " Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", " Bulutangkis"],
  },
];

console.log(data[0].name + " ada di kelas " + data[0].class + " dia mengikuti " + data[0].club);
console.log(data[1].name + " ada di kelas " + data[1].class + " dia mengikuti " + data[1].club);

//Exercise 3

let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"},
];
function printAll() {
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
};
};
printAll();
function printByID(id) {
return todos[id-1].todo;
}
console.log("Print by ID:", printByID(1));
function add(newTodo) {
todos.push({
  id: todos.length - 1,
  todo: newTodo,
})
return todos;
}
console.log("Add:", add("Ngerjain Tugas"));
function deleteByID(id) {
todos.splice(id - 1,1);
return todos;
}
console.log("Delete:", deleteByID(2));
function updateByID(newTodo){
todos[0].todo = newTodo;
return todos;
}
console.log("UpdateByID:", updateByID("Belajar CRUD"));

//exercise 4

let buah = 
[
  {
    nama: 'Apple',
    warna: 'Merah',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'Two seed',
    gambar_buah: 'img/apel.jpg',
  },
  {
    nama: 'Banana',
    warna: 'Kuning',
    nama_latin: 'Musa paradisiaca',
    tipe_biji: 'double seed',
    gambar_buah: 'img/pisang.jfif',
  },
  {
    nama: 'Blueberry',
    warna: 'Biru tua keunguan',
    nama_latin: 'Vaccinium Carymbosum',
    tipe_biji: 'single seed',
    gambar_buah: 'img/blueberryy.jpg',
  },
  {
    nama: 'Cherry',
    warna: 'Merah cerah',
    nama_latin: 'Prunus Apetala',
    tipe_biji: 'Single seed',
    gambar_buah: 'img/cheryy.jpg',
  },
  {
    nama: 'Lemon',
    warna: 'Kuning',
    nama_latin: 'Citrus Limon',
    tipe_biji: 'Double seed',
    gambar_buah: 'img/lemonn.jpg',   
  },
  {
    nama: 'Mango',
    warna: 'Kuning serta Jingga',
    nama_latin: 'Citrus Reticulata',
    tipe_biji: 'Single seed',
    gambar_buah: 'img/mangga.jpg',
  },
  {
    nama: 'Orange',
    warna: 'Geoluhread atau kuning-merah',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'Double seed',
    gambar_buah: 'img/orange.jpg',
  },
  {
    nama: 'Pear',
    warna: 'Kuning keemasan ataupun hijau',
    nama_latin: 'Pyrus Caucasica',
    tipe_biji: 'double seed',
    gambar_buah: 'img/pear.jpg',
  }
];
console.table(buah);

const Apple=buah[0];
console.log(Apple.warna);
console.log(Apple.nama_latin);
console.log(Apple.tipe_biji);

const Banana=buah[1];
console.log(Banana.warna);
console.log(Banana.nama_latin);
console.log(Banana.tipe_biji);

const Blueberry=buah[2];
console.log(Blueberry.warna);
console.log(Blueberry.nama_latin);
console.log(Blueberry.tipe_biji);

const Cherry=buah[3];
console.log(Cherry.warna);
console.log(Cherry.nama_latin);
console.log(Cherry.tipe_biji);

const Lemon=buah[4];
console.log(Lemon.warna);
console.log(Lemon.nama_latin);
console.log(Lemon.tipe_biji);

const Mango=buah[5];
console.log(Mango.warna);
console.log(Mango.nama_latin);
console.log(Mango.tipe_biji);

const Orange=buah[6];
console.log(Orange.warna);
console.log(Orange.nama_latin);
console.log(Orange.tipe_biji);

const Pear=buah[0];
console.log(Pear.warna);
console.log(Pear.nama_latin);
console.log(Pear.tipe_biji);

document.getElementById("NamaApple").innerHTML = Apple.nama;
document.getElementById("WarnaApple").innerHTML=Apple.warna;
document.getElementById("namaLatin").innerHTML=Apple.nama_latin;
document.getElementById("tipebiji").innerHTML=Apple.tipe_biji;

document.getElementById("NamaBanana").innerHTML = Banana.nama;
document.getElementById("WarnaBanana").innerHTML=Banana.warna;
document.getElementById("namaLatinB").innerHTML=Banana.nama_latin;
document.getElementById("tipebijiB").innerHTML=Banana.tipe_biji;

document.getElementById("NamaBlueberry").innerHTML = Blueberry.nama;
document.getElementById("WarnaBlueberry").innerHTML=Blueberry.warna;
document.getElementById("namaLatinBb").innerHTML=Blueberry.nama_latin;
document.getElementById("tipebijiBb").innerHTML=Blueberry.tipe_biji;

document.getElementById("NamaCherry").innerHTML = Cherry.nama;
document.getElementById("WarnaCherry").innerHTML=Cherry.warna;
document.getElementById("namaLatinC").innerHTML=Cherry.nama_latin;
document.getElementById("tipebijiC").innerHTML=Cherry.tipe_biji;

document.getElementById("NamaLemon").innerHTML = Lemon.nama;
document.getElementById("WarnaLemon").innerHTML=Lemon.warna;
document.getElementById("namaLatinL").innerHTML=Lemon.nama_latin;
document.getElementById("tipebijiL").innerHTML=Lemon.tipe_biji;

document.getElementById("NamaMango").innerHTML = Mango.nama;
document.getElementById("WarnaMango").innerHTML=Mango.warna;
document.getElementById("namaLatinM").innerHTML=Mango.nama_latin;
document.getElementById("tipebijiM").innerHTML=Mango.tipe_biji;

document.getElementById("NamaOrange").innerHTML = Orange.nama;
document.getElementById("WarnaOrange").innerHTML=Orange.warna;
document.getElementById("namaLatinO").innerHTML=Orange.nama_latin;
document.getElementById("tipebijiO").innerHTML=Orange.tipe_biji;

document.getElementById("NamaPear").innerHTML = Pear.nama;
document.getElementById("WarnaPear").innerHTML=Pear.warna;
document.getElementById("namaLatinP").innerHTML=Pear.nama_latin;
document.getElementById("tipebijiP").innerHTML=Pear.tipe_biji;
