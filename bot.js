const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
    return ["Halo, perkenalkan nama saya nelbot. Siapa nama kamu?",
        `halo ${data?.nama}, berapa usia kamu?`,
        `ohh ${data?.usia}, hobi yang kamu suka apa? `,
        `wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, ya udah kalau gitu. udahan yah?`
    ];
};
pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
    if (jawaban.value.length < 1) {
        return alert("silahkan isi jawaban dulu");
    }
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value });
    }
    else if (init === 2) {
        botDelay({ usia: jawaban.value });
    }
    else if (init === 3) {
        botDelay({ hobi: jawaban.value });
    }
    else if (init === 4) {
        botDelay({ pacar: jawaban.value });
    }
    else if (init === 5) {
        finishing();
    }
    else {
        botEnd();
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block";
    container[0].style.filter = "blur(8px)";
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1000);
    userData.push(jawaban.value);
    jawaban.value = '';
}

function finishing() {
    pertanyaan.innerHTML = `thank you ya ${userData[0]} udah main ke nelbot 😊 `;
    jawaban.value = 'sipp thx you juga';
}

function botEnd() {
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`);
    window.location.reload();
}
