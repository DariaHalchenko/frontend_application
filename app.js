// Loome juhuslike tsitaatide kogu ja kasulikud otsinguabilised (eestikeelsed nimed).
const tsitaadid = [
  "Iga klikk on kutse tantsule.",
  "Valgus ei küsi luba – ta lihtsalt ilmub.",
  "Lihtsus on julguse peegel.",
  "Värvid kõlavad nagu häälestatud süntees.",
  "Helk on hingemuster pikslites."
];

/**
 * Leiab elemendi ID alusel, et vältida korduvat koodi.
 * @param {string} sihtId
 * @returns {HTMLElement|null}
 */
function leiaElement(sihtId) {
  return document.getElementById(sihtId);
}

/**
 * Kuvab tervitava sõnumi soovitud sihtalasse.
 */
function kuvaTervitus(sihtId) {
  const sihtala = leiaElement(sihtId);
  if (!sihtala) return;
  sihtala.textContent = "Tere, loome uue meeleolu!";
}

/**
 * Vahetab taustaklassi, et luua dünaamiline atmosfäär.
 */
function vahetaTausta(elementId) {
  const plokk = leiaElement(elementId);
  if (!plokk) return;
  plokk.classList.toggle("taust-pisar");
}

/**
 * Kujundab nupu ümber ja jätab muutuse meelde.
 */
function kujundaNupp(nuppElement) {
  const nupp = nuppElement || event?.currentTarget;
  if (!nupp) return;
  nupp.classList.toggle("kujundatud-nupp");
  nupp.textContent = nupp.classList.contains("kujundatud-nupp")
    ? "Nupp helgib"
    : "Kohanda nupp";
}

/**
 * Lisab loendisse uue elemendi ja annab sellele rõhutuse.
 */
function lisaLoendiElement(loendId, sisu) {
  const loend = leiaElement(loendId);
  if (!loend) return;
  const uusElement = document.createElement("li");
  const tekst = sisu || "Uus energia";
  uusElement.textContent = tekst;
  uusElement.classList.add("loendi-efekt");
  loend.appendChild(uusElement);
}

/**
 * Eemaldab loendist viimase elemendi, kui see eksisteerib.
 */
function eemaldaLoendiElement(loendId) {
  const loend = leiaElement(loendId);
  if (!loend || loend.children.length === 0) return;
  loend.removeChild(loend.lastElementChild);
}

/**
 * Lisab elemendile naeratava rõhuasetuse.
 */
function naerataTekst(elementId) {
  const element = leiaElement(elementId);
  if (!element) return;
  element.classList.toggle("naeratav");
  if (element.classList.contains("naeratav")) {
    element.dataset.originaalTekst = element.textContent;
    element.textContent = `${element.textContent} :)`;
  } else if (element.dataset.originaalTekst) {
    element.textContent = element.dataset.originaalTekst;
    delete element.dataset.originaalTekst;
  }
}

/**
 * Käivitab kogu lehel tumeda energia.
 */
function kaivitaTumeReziim() {
  document.body.classList.add("tume-kate");
}

/**
 * Taastab heleduse.
 */
function lopetaTumeReziim() {
  document.body.classList.remove("tume-kate");
}

/**
 * Kuvab juhusliku tsitaadi etteantud sihtalal.
 */
function juhuslikTsitaat(sihtId) {
  const sihtala = leiaElement(sihtId);
  if (!sihtala) return;
  const juhuslik = tsitaadid[Math.floor(Math.random() * tsitaadid.length)];
  sihtala.textContent = juhuslik;
}

/**
 * Lisab kaardile lühiajalise animatsiooni.
 */
function animeeriKaart(kaartId) {
  const kaart = leiaElement(kaartId);
  if (!kaart) return;
  kaart.classList.remove("animeeritud");
  // Jõustame uuesti, et animatsioon korduks.
  void kaart.offsetWidth;
  kaart.classList.add("animeeritud");
}

/**
 * Käivitab pulseeriva efekti kogu grupis.
 */
function pulseeriIkon(sihtId) {
  const plokk = leiaElement(sihtId);
  if (!plokk) return;
  plokk.classList.toggle("pulseeriv");
}

