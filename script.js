/* script.js - Confielectro */
const elementos = [{num:1, sim:"H", nombre:"Hidrógeno"},
{num:2, sim:"He", nombre:"Helio"},
{num:3, sim:"Li", nombre:"Litio"},
{num:4, sim:"Be", nombre:"Berilio"},
{num:5, sim:"B", nombre:"Boro"},
{num:6, sim:"C", nombre:"Carbono"},
{num:7, sim:"N", nombre:"Nitrógeno"},
{num:8, sim:"O", nombre:"Oxígeno"},
{num:9, sim:"F", nombre:"Flúor"},
{num:10, sim:"Ne", nombre:"Neón"},
{num:11, sim:"Na", nombre:"Sodio"},
{num:12, sim:"Mg", nombre:"Magnesio"},
{num:13, sim:"Al", nombre:"Aluminio"},
{num:14, sim:"Si", nombre:"Silicio"},
{num:15, sim:"P", nombre:"Fósforo"},
{num:16, sim:"S", nombre:"Azufre"},
{num:17, sim:"Cl", nombre:"Cloro"},
{num:18, sim:"Ar", nombre:"Argón"},
{num:19, sim:"K", nombre:"Potasio"},
{num:20, sim:"Ca", nombre:"Calcio"},
{num:21, sim:"Sc", nombre:"Escandio"},
{num:22, sim:"Ti", nombre:"Titanio"},
{num:23, sim:"V", nombre:"Vanadio"},
{num:24, sim:"Cr", nombre:"Cromo"},
{num:25, sim:"Mn", nombre:"Manganeso"},
{num:26, sim:"Fe", nombre:"Hierro"},
{num:27, sim:"Co", nombre:"Cobalto"},
{num:28, sim:"Ni", nombre:"Níquel"},
{num:29, sim:"Cu", nombre:"Cobre"},
{num:30, sim:"Zn", nombre:"Zinc"},
{num:31, sim:"Ga", nombre:"Galio"},
{num:32, sim:"Ge", nombre:"Germanio"},
{num:33, sim:"As", nombre:"Arsénico"},
{num:34, sim:"Se", nombre:"Selenio"},
{num:35, sim:"Br", nombre:"Bromo"},
{num:36, sim:"Kr", nombre:"Kriptón"},
{num:37, sim:"Rb", nombre:"Rubidio"},
{num:38, sim:"Sr", nombre:"Estroncio"},
{num:39, sim:"Y", nombre:"Ytrio"},
{num:40, sim:"Zr", nombre:"Circonio"},
{num:41, sim:"Nb", nombre:"Niobio"},
{num:42, sim:"Mo", nombre:"Molibdeno"},
{num:43, sim:"Tc", nombre:"Tecnecio"},
{num:44, sim:"Ru", nombre:"Rutenio"},
{num:45, sim:"Rh", nombre:"Rodio"},
{num:46, sim:"Pd", nombre:"Paladio"},
{num:47, sim:"Ag", nombre:"Plata"},
{num:48, sim:"Cd", nombre:"Cadmio"},
{num:49, sim:"In", nombre:"Indio"},
{num:50, sim:"Sn", nombre:"Estaño"},
{num:51, sim:"Sb", nombre:"Antimonio"},
{num:52, sim:"Te", nombre:"Telurio"},
{num:53, sim:"I", nombre:"Yodo"},
{num:54, sim:"Xe", nombre:"Xenón"},
{num:55, sim:"Cs", nombre:"Cesio"},
{num:56, sim:"Ba", nombre:"Bario"},
{num:57, sim:"La", nombre:"Lantano"},
{num:58, sim:"Ce", nombre:"Cerio"},
{num:59, sim:"Pr", nombre:"Praseodimio"},
{num:60, sim:"Nd", nombre:"Neodimio"},
{num:61, sim:"Pm", nombre:"Promecio"},
{num:62, sim:"Sm", nombre:"Samario"},
{num:63, sim:"Eu", nombre:"Europio"},
{num:64, sim:"Gd", nombre:"Gadolinio"},
{num:65, sim:"Tb", nombre:"Terbio"},
{num:66, sim:"Dy", nombre:"Disprosio"},
{num:67, sim:"Ho", nombre:"Holmio"},
{num:68, sim:"Er", nombre:"Erbio"},
{num:69, sim:"Tm", nombre:"Tulio"},
{num:70, sim:"Yb", nombre:"Iterbio"},
{num:71, sim:"Lu", nombre:"Lutecio"},
{num:72, sim:"Hf", nombre:"Hafnio"},
{num:73, sim:"Ta", nombre:"Tantalio"},
{num:74, sim:"W", nombre:"Wolframio"},
{num:75, sim:"Re", nombre:"Renio"},
{num:76, sim:"Os", nombre:"Osmio"},
{num:77, sim:"Ir", nombre:"Iridio"},
{num:78, sim:"Pt", nombre:"Platino"},
{num:79, sim:"Au", nombre:"Oro"},
{num:80, sim:"Hg", nombre:"Mercurio"},
{num:81, sim:"Tl", nombre:"Talio"},
{num:82, sim:"Pb", nombre:"Plomo"},
{num:83, sim:"Bi", nombre:"Bismuto"},
{num:84, sim:"Po", nombre:"Polonio"},
{num:85, sim:"At", nombre:"Astato"},
{num:86, sim:"Rn", nombre:"Radón"},
{num:87, sim:"Fr", nombre:"Francio"},
{num:88, sim:"Ra", nombre:"Radio"},
{num:89, sim:"Ac", nombre:"Actinio"},
{num:90, sim:"Th", nombre:"Torio"},
{num:91, sim:"Pa", nombre:"Protactinio"},
{num:92, sim:"U", nombre:"Uranio"},
{num:93, sim:"Np", nombre:"Neptunio"},
{num:94, sim:"Pu", nombre:"Plutonio"},
{num:95, sim:"Am", nombre:"Américo"},
{num:96, sim:"Cm", nombre:"Curio"},
{num:97, sim:"Bk", nombre:"Berkelio"},
{num:98, sim:"Cf", nombre:"Californio"},
{num:99, sim:"Es", nombre:"Einstenio"},
{num:100, sim:"Fm", nombre:"Fermio"},
{num:101, sim:"Md", nombre:"Mendelevio"},
{num:102, sim:"No", nombre:"Nobelio"},
{num:103, sim:"Lr", nombre:"Lawrencio"},
{num:104, sim:"Rf", nombre:"Rutherfordio"},
{num:105, sim:"Db", nombre:"Dubnio"},
{num:106, sim:"Sg", nombre:"Seaborgio"},
{num:107, sim:"Bh", nombre:"Bohrio"},
{num:108, sim:"Hs", nombre:"Hassio"},
{num:109, sim:"Mt", nombre:"Meitnerio"},
{num:110, sim:"Ds", nombre:"Darmstadtio"},
{num:111, sim:"Rg", nombre:"Roentgenio"},
{num:112, sim:"Cn", nombre:"Copernicio"},
{num:113, sim:"Nh", nombre:"Nihonio"},
{num:114, sim:"Fl", nombre:"Flerovio"},
{num:115, sim:"Mc", nombre:"Moscovio"},
{num:116, sim:"Lv", nombre:"Livermorio"},
{num:117, sim:"Ts", nombre:"Tennessino"},
{num:118, sim:"Og", nombre:"Oganesón"}];

let mazo = [];
let index = 0;
let mode = "basic";
const total = elementos.length;

const card = document.getElementById("card");
const atomicNumber = document.getElementById("atomicNumber");
const symbolEl = document.getElementById("symbol");
const nameEl = document.getElementById("name");
const extraInfo = document.getElementById("extraInfo");
const counter = document.getElementById("counter");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const sClick = document.getElementById("soundClick");
const sFlip = document.getElementById("soundFlip");
const sRare = document.getElementById("soundRare");

function shuffleDeck() {
    mazo = elementos.slice().sort(() => Math.random() - 0.5);
    index = 0;
    updateCounter();
    restartBtn.style.display = "none";
}

function updateCounter() {
    counter.textContent = `${index} / ${total}`;
}

function showNext() {
    if (index >= mazo.length) {
        // end of deck
        atomicNumber.textContent = "";
        symbolEl.textContent = "✔";
        nameEl.textContent = "No quedan más cartas";
        extraInfo.innerHTML = "";
        restartBtn.style.display = "inline-block";
        sRare.play().catch(()=>{});
        return;
    }
    const el = mazo[index++];
    updateCounter();

    // play click
    sClick.play().catch(()=>{});

    // flip animation
    card.classList.add("flipped");
    sFlip.play().catch(()=>{});
    setTimeout(() => {
        atomicNumber.textContent = (mode === "basic") ? el.num : "";
        symbolEl.textContent = el.sim;
        nameEl.textContent = (mode === "basic") ? el.nombre : "";
        extraInfo.innerHTML = `<strong>Número:</strong> ${el.num}<br><strong>Símbolo:</strong> ${el.sim}`;
        card.classList.remove("flipped");
    }, 420);
}

function setMode(m) {
    mode = m;
}

document.getElementsByName("mode").forEach(r => {
    r.addEventListener("change", (e) => setMode(e.target.value));
});

nextBtn.addEventListener("click", showNext);
restartBtn.addEventListener("click", () => { shuffleDeck(); showNext(); });

// particles canvas simple
const canvas = document.getElementById('particles');
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const particles = [];
    for (let i=0;i<80;i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height, r:Math.random()*2+0.6, vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3});
    function loop() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let p of particles) {
            p.x += p.vx; p.y += p.vy;
            if (p.x<0) p.x = canvas.width;
            if (p.x>canvas.width) p.x = 0;
            if (p.y<0) p.y = canvas.height;
            if (p.y>canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255,255,255,0.05)';
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
        }
        requestAnimationFrame(loop);
    }
    loop();
    window.addEventListener('resize', ()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
}

// initialize
shuffleDeck();
showNext();

// register sw
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
}
