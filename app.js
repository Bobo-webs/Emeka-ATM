// ═══════════════════════════════════════════════════════════════
//  TRANSLATIONS  (English · Hausa · Igbo · Yorùbá)
// ═══════════════════════════════════════════════════════════════
const T = {

  english: {
    langName: 'English', ttsLang: 'en-GB', ttsPitch: 1.0, ttsRateMul: 1.0,

    welcome: 'Welcome to Emeka ATM.',
    selectLang: 'Please select your preferred language.',
    langBtn_english: 'English',
    langBtn_hausa: 'Hausa',
    langBtn_igbo: 'Igbo',
    langBtn_yoruba: 'Yorùbá',

    stepLang: 'Step 1 — Language',
    stepPin: 'Step 2 — PIN',
    stepMenu: 'Step 3 — Main Menu',
    stepAction: 'Step 4 — Transaction',
    stepConfirm: 'Step 5 — Confirm',

    enterPin: 'Enter Your PIN',
    enterPinMsg: 'Please enter your 4-digit PIN using the keypad, then press Confirm.',
    confirmPin: 'Confirm PIN',
    cancel: 'Cancel',
    wrongPin: (n) => `Incorrect PIN. You have ${n} attempt${n !== 1 ? 's' : ''} remaining.`,
    blockedTitle: 'Card Blocked',
    blockedMsg: 'Too many incorrect attempts. Your card has been blocked. Please contact your bank.',
    startOver: 'Start Over',

    menuTitle: 'Main Menu',
    menuMsg: 'Please select an option.',
    withdraw: 'Withdraw Cash',
    checkBalance: 'Check Balance',
    transfer: 'Transfer Funds',
    exit: 'Exit / Log Out',
    back: 'Back',

    balanceTitle: 'Account Balance',
    balanceMsg: (a) => `Your current account balance is ${a}.`,
    backMenu: 'Back to Menu',
    logout: 'Log Out',

    withdrawTitle: 'Withdraw Cash',
    enterAmountMsg: 'Enter the amount you wish to withdraw using the keypad, then press Confirm.',
    confirmAmount: 'Confirm Amount',
    invalidAmount: 'Please enter a valid amount.',

    confirmWithdrawTitle: 'Confirm Withdrawal',
    confirmWithdrawMsg: (a) => `You are about to withdraw ${a}. Do you confirm?`,
    yes: 'Yes, Proceed',
    no: 'No, Cancel',

    insufficientTitle: 'Insufficient Funds',
    insufficientMsg: (b) => `Sorry, your balance of ${b} is not enough for this withdrawal.`,
    tryAgain: 'Try Again',

    successWithdrawTitle: 'Withdrawal Successful',
    successWithdrawMsg: (a, b) => `You have successfully withdrawn ${a}. Your new balance is ${b}.`,
    anotherTx: 'Another Transaction',

    transferTitle: 'Transfer Funds',
    enterAccMsg: 'Please enter the recipient\'s 10-digit account number using the keypad.',
    enterAccNum: 'Enter Account Number',
    confirmAcc: 'Confirm Account Number',
    invalidAcc: 'Account number must be exactly 10 digits. Please try again.',

    enterTransAmtMsg: (acc) => `Account ${acc} entered. Now enter the amount to transfer.`,
    enterTransAmt: 'Enter Transfer Amount',
    confirmTransAmt: 'Confirm Amount',

    confirmTransferTitle: 'Confirm Transfer',
    confirmTransferMsg: (a, acc) => `You are about to transfer ${a} to account number ${acc}. Do you confirm?`,

    insufficientTransMsg: (b) => `Sorry, your balance of ${b} is not enough for this transfer.`,
    successTransferTitle: 'Transfer Successful',
    successTransferMsg: (a, acc, b) => `You have successfully transferred ${a} to account ${acc}. Your new balance is ${b}.`,

    receiptDate: 'Date', receiptTime: 'Time',
    voiceOn: '🔊 ON', voiceOff: '🔇 OFF',
    voiceToggleOn: 'Voice is now on.',
    clr: 'Cleared', del: 'Deleted', maxDigits: 'Maximum digits reached.',
  },

  hausa: {
    langName: 'Hausa', ttsLang: 'en-NG', ttsPitch: 0.88, ttsRateMul: 0.9,

    welcome: 'Barka da zuwa Emeka ATM.',
    selectLang: 'Don Allah zaɓi yaren ku.',
    langBtn_english: 'Turanci',
    langBtn_hausa: 'Hausa',
    langBtn_igbo: 'Igbo',
    langBtn_yoruba: 'Yorùbá',

    stepLang: 'Mataki 1 — Harshe',
    stepPin: 'Mataki 2 — Lambar PIN',
    stepMenu: 'Mataki 3 — Babban Menu',
    stepAction: 'Mataki 4 — Aikin Banki',
    stepConfirm: 'Mataki 5 — Tabbatarwa',

    enterPin: 'Shigar da PIN',
    enterPinMsg: 'Don Allah shigar da lambar PIN ta lamba huɗu ta amfani da kwallon lambobi, sannan danna Tabbatar.',
    confirmPin: 'Tabbatar da PIN',
    cancel: 'Soke',
    wrongPin: (n) => `PIN ba daidai ba ne. Kuna da yiyuwa ${n} sauran.`,
    blockedTitle: 'An Toshe Kaatin',
    blockedMsg: 'Kurakurai da yawa. An toshe kaatin ku. Don Allah tuntuɓi bankin ku.',
    startOver: 'Fara Daga Farko',

    menuTitle: 'Babban Menu',
    menuMsg: 'Don Allah zaɓi abin da kuke so.',
    withdraw: 'Cire Kuɗi',
    checkBalance: 'Duba Asusun',
    transfer: 'Canja Kuɗi',
    exit: 'Fita / Fice',
    back: 'Koma Baya',

    balanceTitle: 'Asusun Banki',
    balanceMsg: (a) => `Asusun ku na yanzu shine ${a}.`,
    backMenu: 'Koma Menu',
    logout: 'Fita',

    withdrawTitle: 'Cire Kuɗi',
    enterAmountMsg: 'Shigar da adadin da kake son cirewa ta amfani da kwallon lambobi, sannan danna Tabbatar.',
    confirmAmount: 'Tabbatar da Adadi',
    invalidAmount: 'Don Allah shigar da adadi mai inganci.',

    confirmWithdrawTitle: 'Tabbatar da Cirewa',
    confirmWithdrawMsg: (a) => `Kana son cire ${a}. Shin kana tabbata?`,
    yes: 'Ee, Ci Gaba',
    no: 'A\'a, Soke',

    insufficientTitle: 'Kuɗi Ba Su Isa',
    insufficientMsg: (b) => `Yi hakuri, asusun ku na ${b} bai isa don wannan cirewa ba.`,
    tryAgain: 'Gwada Kuma',

    successWithdrawTitle: 'An Cire Kuɗi',
    successWithdrawMsg: (a, b) => `An cire ${a} daga asusun ku. Asusun sabon ku shine ${b}.`,
    anotherTx: 'Wani Aiki',

    transferTitle: 'Canja Kuɗi',
    enterAccMsg: 'Don Allah shigar da lambar asusun mai karɓa wanda ya ƙunshi lamba goma ta amfani da kwallon lambobi.',
    enterAccNum: 'Shigar da Lambar Asusu',
    confirmAcc: 'Tabbatar da Lambar Asusu',
    invalidAcc: 'Lambar asusu dole ta kasance lamba goma. Don Allah sake gwadawa.',

    enterTransAmtMsg: (acc) => `An shigar da asusu ${acc}. Yanzu shigar da adadin da za a canja.`,
    enterTransAmt: 'Shigar da Adadin Canjawa',
    confirmTransAmt: 'Tabbatar da Adadi',

    confirmTransferTitle: 'Tabbatar da Canjawa',
    confirmTransferMsg: (a, acc) => `Kana son canja ${a} zuwa asusu ${acc}. Shin kana tabbata?`,

    insufficientTransMsg: (b) => `Yi hakuri, asusun ku na ${b} bai isa don wannan canjawa ba.`,
    successTransferTitle: 'An Canja Kuɗi',
    successTransferMsg: (a, acc, b) => `An canja ${a} zuwa asusu ${acc}. Asusun sabon ku shine ${b}.`,

    receiptDate: 'Ranar', receiptTime: 'Lokaci',
    voiceOn: '🔊 ON', voiceOff: '🔇 OFF',
    voiceToggleOn: 'An kunna muryar.',
    clr: 'An share', del: 'An goge', maxDigits: 'An kai iyakar lambobi.',
  },

  igbo: {
    langName: 'Igbo', ttsLang: 'en-NG', ttsPitch: 1.15, ttsRateMul: 0.95,

    welcome: 'Nnọọ na Emeka ATM.',
    selectLang: 'Biko họrọ asụsụ ị chọrọ.',
    langBtn_english: 'Bekee',
    langBtn_hausa: 'Hausa',
    langBtn_igbo: 'Igbo',
    langBtn_yoruba: 'Yorùbá',

    stepLang: 'Nzọ 1 — Asụsụ',
    stepPin: 'Nzọ 2 — Nọmba PIN',
    stepMenu: 'Nzọ 3 — Menu Isi',
    stepAction: 'Nzọ 4 — Ọrụ Ụlọ Akụ',
    stepConfirm: 'Nzọ 5 — Nkwenye',

    enterPin: 'Tinye PIN Gị',
    enterPinMsg: 'Biko tinye nọmba PIN gị nke nwere ihe 4 site na keyboard, wee pịa Kwenye.',
    confirmPin: 'Kwenye PIN',
    cancel: 'Kagbuo',
    wrongPin: (n) => `PIN ezighi ezi. Ị nwere mgbalị ${n} fọdụrụ.`,
    blockedTitle: 'E Mechiri Kaadị',
    blockedMsg: 'Ọtụtụ ihe ọjọọ. E mechiri kaadị gị. Biko kpọtụrụ ụlọ akụ gị.',
    startOver: 'Malite Ọzọ',

    menuTitle: 'Menu Isi',
    menuMsg: 'Biko họrọ ihe ị chọrọ ime.',
    withdraw: 'Wepụ Ego',
    checkBalance: 'Lelee Akụ',
    transfer: 'Nyefee Ego',
    exit: 'Pụọ / Nwụcha',
    back: 'Laghachi',

    balanceTitle: 'Akụ N\'ụlọ Akụ',
    balanceMsg: (a) => `Ego dị n\'akụ gị ugbu a bụ ${a}.`,
    backMenu: 'Laghachi na Menu',
    logout: 'Pụọ',

    withdrawTitle: 'Wepụ Ego',
    enterAmountMsg: 'Tinye ego ị chọrọ iwepụ site na keyboard, wee pịa Kwenye.',
    confirmAmount: 'Kwenye Ego',
    invalidAmount: 'Biko tinye ego ziri ezi.',

    confirmWithdrawTitle: 'Kwenye Nwepu',
    confirmWithdrawMsg: (a) => `Ị chọrọ iwepụ ${a}. Ị kwenye?`,
    yes: 'Ee, Gaa N\'ihu',
    no: 'Mba, Kagbuo',

    insufficientTitle: 'Ego Ezughị Oke',
    insufficientMsg: (b) => `Ndo, ego dị n\'akụ gị bụ ${b}, o zughị oke maka nwepu a.`,
    tryAgain: 'Nwaa Ọzọ',

    successWithdrawTitle: 'E Wepụla Ego',
    successWithdrawMsg: (a, b) => `Ị wepụtala ${a} n\'akụ gị. Ego fọdụrụ n\'akụ gị bụ ${b}.`,
    anotherTx: 'Ọrụ Ọzọ',

    transferTitle: 'Nyefee Ego',
    enterAccMsg: 'Biko tinye nọmba akụ onye ọzọ nke nwere ihe iri site na keyboard.',
    enterAccNum: 'Tinye Nọmba Akụ',
    confirmAcc: 'Kwenye Nọmba Akụ',
    invalidAcc: 'Nọmba akụ ga-abụ ihe iri. Biko gbalịa ọzọ.',

    enterTransAmtMsg: (acc) => `E tinyelara nọmba akụ ${acc}. Ugbu a tinye ego ị chọrọ inyefe.`,
    enterTransAmt: 'Tinye Ego Inyefe',
    confirmTransAmt: 'Kwenye Ego',

    confirmTransferTitle: 'Kwenye Nyefe',
    confirmTransferMsg: (a, acc) => `Ị chọrọ inyefe ${a} na akụ ${acc}. Ị kwenye?`,

    insufficientTransMsg: (b) => `Ndo, ego dị n\'akụ gị bụ ${b}, o zughị oke maka nyefe a.`,
    successTransferTitle: 'E Nyefela Ego',
    successTransferMsg: (a, acc, b) => `Ị nyefela ${a} na akụ ${acc}. Ego fọdụrụ n\'akụ gị bụ ${b}.`,

    receiptDate: 'Ụbọchị', receiptTime: 'Oge',
    voiceOn: '🔊 ON', voiceOff: '🔇 OFF',
    voiceToggleOn: 'Etinyela olu ugbu a.',
    clr: 'Ewepụla niile', del: 'Ewepụla otu', maxDigits: 'Ọnụọgụ kacha eruola.',
  },

  yoruba: {
    langName: 'Yorùbá', ttsLang: 'en-NG', ttsPitch: 1.25, ttsRateMul: 1.0,

    welcome: 'Ẹ káàbọ̀ sí Emeka ATM.',
    selectLang: 'Jọ̀wọ́ yan èdè tí o fẹ́.',
    langBtn_english: 'Gẹ̀ẹ́sì',
    langBtn_hausa: 'Hausa',
    langBtn_igbo: 'Igbo',
    langBtn_yoruba: 'Yorùbá',

    stepLang: 'Ìgbésẹ̀ 1 — Èdè',
    stepPin: 'Ìgbésẹ̀ 2 — Nọ́mbà PIN',
    stepMenu: 'Ìgbésẹ̀ 3 — Àkójọ Àkọ́kọ́',
    stepAction: 'Ìgbésẹ̀ 4 — Iṣẹ́ Ìfowópamọ́',
    stepConfirm: 'Ìgbésẹ̀ 5 — Ìmúnisọ́nà',

    enterPin: 'Tẹ PIN Rẹ',
    enterPinMsg: 'Jọ̀wọ́ tẹ nọ́mbà PIN rẹ tí ó ní ìmọ́ mẹ́rin nínú keyboard, lẹ́hìn náà tẹ Ìmúnisọ́nà.',
    confirmPin: 'Ìmúnisọ́nà PIN',
    cancel: 'Fagilé',
    wrongPin: (n) => `PIN kò tọ́. O ní ìgbìyànjú ${n} tí ó kù.`,
    blockedTitle: 'Káàdì Ti Dí',
    blockedMsg: 'Ọ̀pọ̀lọpọ̀ àṣìṣe. Káàdì rẹ ti dí. Jọ̀wọ́ kàn sí ilé-ìfowópamọ́ rẹ.',
    startOver: 'Bẹ̀rẹ̀ Lẹ́ẹ̀kan Sí',

    menuTitle: 'Àkójọ Àkọ́kọ́',
    menuMsg: 'Jọ̀wọ́ yan àṣàyàn kan.',
    withdraw: 'Yọ Owó Kúrò',
    checkBalance: 'Ṣàyẹ̀wò Ìwọ̀nba',
    transfer: 'Gbé Owó',
    exit: 'Jáde / Kúrò',
    back: 'Padà',

    balanceTitle: 'Ìwọ̀nba Àkàǹtì',
    balanceMsg: (a) => `Ìwọ̀nba rẹ lọ́wọ́lọ́wọ́ jẹ́ ${a}.`,
    backMenu: 'Padà sí Àkójọ',
    logout: 'Jáde',

    withdrawTitle: 'Yọ Owó Kúrò',
    enterAmountMsg: 'Tẹ iye owó tí o fẹ́ yọ kúrò nínú keyboard, lẹ́hìn náà tẹ Ìmúnisọ́nà.',
    confirmAmount: 'Ìmúnisọ́nà Iye Owó',
    invalidAmount: 'Jọ̀wọ́ tẹ iye owó tí ó tọ́.',

    confirmWithdrawTitle: 'Ìmúnisọ́nà Yíyọ',
    confirmWithdrawMsg: (a) => `O fẹ́ yọ ${a} kúrò. Ṣé o dájú?`,
    yes: 'Bẹ́ẹ̀ni, Tẹ̀síwájú',
    no: 'Rárá, Fagilé',

    insufficientTitle: 'Owó Kò Tó',
    insufficientMsg: (b) => `Màafò, ìwọ̀nba rẹ tí ó jẹ́ ${b} kò tó fún yíyọ yìí.`,
    tryAgain: 'Gbìyànjú Lẹ́ẹ̀kan Sí',

    successWithdrawTitle: 'A Ti Yọ Owó',
    successWithdrawMsg: (a, b) => `O ti yọ ${a} kúrò lára àkàǹtì rẹ. Ìwọ̀nba tuntun rẹ jẹ́ ${b}.`,
    anotherTx: 'Iṣẹ́ Mìíràn',

    transferTitle: 'Gbé Owó',
    enterAccMsg: 'Jọ̀wọ́ tẹ nọ́mbà àkàǹtì olùgbà tí ó ní ìmọ́ mẹ́wàá nínú keyboard.',
    enterAccNum: 'Tẹ Nọ́mbà Àkàǹtì',
    confirmAcc: 'Ìmúnisọ́nà Nọ́mbà Àkàǹtì',
    invalidAcc: 'Nọ́mbà àkàǹtì gbọ́dọ̀ ní ìmọ́ mẹ́wàá gangan. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan sí.',

    enterTransAmtMsg: (acc) => `Àkàǹtì ${acc} ti tẹ̀. Ní báyìí tẹ iye owó tí o fẹ́ gbé.`,
    enterTransAmt: 'Tẹ Iye Owó Gbígbé',
    confirmTransAmt: 'Ìmúnisọ́nà Iye Owó',

    confirmTransferTitle: 'Ìmúnisọ́nà Gbígbé',
    confirmTransferMsg: (a, acc) => `O fẹ́ gbé ${a} sí àkàǹtì ${acc}. Ṣé o dájú?`,

    insufficientTransMsg: (b) => `Màafò, ìwọ̀nba rẹ tí ó jẹ́ ${b} kò tó fún gbígbé yìí.`,
    successTransferTitle: 'A Ti Gbé Owó',
    successTransferMsg: (a, acc, b) => `O ti gbé ${a} sí àkàǹtì ${acc}. Ìwọ̀nba tuntun rẹ jẹ́ ${b}.`,

    receiptDate: 'Ọjọ́', receiptTime: 'Àkókò',
    voiceOn: '🔊 ON', voiceOff: '🔇 OFF',
    voiceToggleOn: 'Ohùn ti tún tan.',
    clr: 'Ti paarẹ', del: 'Ti pa ọkan', maxDigits: 'O ti dé ìpẹ̀kun ìmọ́.',
  }
};

// ═══════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════
const STATE = {
  lang: 'english',
  screen: 'lang',
  buffer: '',
  attempts: 0,
  balance: 85000,
  pendingAmount: 0,
  pendingAcc: '',
  muted: false,
};
const CORRECT_PIN = '1234';

let suppressNextFocusSpeak = false;

function L() { return T[STATE.lang]; }
function fmt(n) { return '₦' + n.toLocaleString('en-NG'); }

// ═══════════════════════════════════════════════════════════════
//  DOM
// ═══════════════════════════════════════════════════════════════
const elStep = document.getElementById('screen-step');
const elTitle = document.getElementById('screen-title');
const elBody = document.getElementById('screen-body');
const elEcho = document.getElementById('input-echo');
const elNumpad = document.getElementById('numpad');
const elActions = document.getElementById('actions');
const elLive = document.getElementById('aria-live');
const elRate = document.getElementById('speech-rate');
const elMute = document.getElementById('mute-btn');

// ═══════════════════════════════════════════════════════════════
//  TTS
// ═══════════════════════════════════════════════════════════════
let voices = [];
function loadVoices() {
  if (!window.speechSynthesis) return;
  voices = window.speechSynthesis.getVoices();
}
if (window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
function getBestVoice(lang) {
  return voices.find(v => v.lang === lang)
    || voices.find(v => v.lang.startsWith(lang.split('-')[0]))
    || null;
}
function speak(text, interrupt = true) {
  if (STATE.muted || !window.speechSynthesis) return;
  if (interrupt) window.speechSynthesis.cancel();
  if (!voices.length) loadVoices();
  const l = L();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = l.ttsLang;
  u.pitch = l.ttsPitch;
  u.rate = parseFloat(elRate.value) * l.ttsRateMul;
  const v = getBestVoice(l.ttsLang);
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
  elLive.textContent = '';
  setTimeout(() => { elLive.textContent = text; }, 50);
}

// ═══════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════
function setScreen(step, title, body, cls = '') {

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel(); // Stop any previous speech instantly
  }

  elStep.textContent = step;
  elTitle.textContent = title;
  elBody.textContent = body;
  elBody.className = cls;
  elEcho.textContent = '';
}
function clearActions() { elActions.innerHTML = ''; }
function showNumpad(on) { elNumpad.classList.toggle('hidden', !on); }
function addBtn(text, cls, fn, aria) {
  const b = document.createElement('button');
  b.className = 'act-btn ' + (cls || '');
  b.textContent = text;
  b.setAttribute('aria-label', aria || text);
  b.addEventListener('focus', () => {
    if (suppressNextFocusSpeak) {
      suppressNextFocusSpeak = false;
      return;
    }
    speak(aria || text, false);
  });
  b.addEventListener('click', fn);
  elActions.appendChild(b);
  return b;
}
function focusFirst() {
  suppressNextFocusSpeak = true;

  setTimeout(() => {
    const f = elActions.querySelector('button')
      || elNumpad.querySelector('button');
    if (f) f.focus();
  }, 80);
}

// Numpad config per screen
let numCfg = { maxLen: 4, mask: true };

elNumpad.addEventListener('click', e => {
  const btn = e.target.closest('.num-btn');
  if (!btn) return;
  const val = btn.dataset.val;
  if (val === 'CLR') {
    STATE.buffer = '';
    speak(L().clr, false);
  } else if (val === 'DEL') {
    STATE.buffer = STATE.buffer.slice(0, -1);
    speak(L().del, false);
  } else {
    if (STATE.buffer.length < numCfg.maxLen) {
      STATE.buffer += val;
      speak(val, false);
    } else {
      speak(L().maxDigits, false);
      return;
    }
  }
  elEcho.textContent = numCfg.mask ? '●'.repeat(STATE.buffer.length) : STATE.buffer;
});

elNumpad.querySelectorAll('.num-btn').forEach(btn => {
  btn.addEventListener('focus', () => {
    // Do nothing — prevent double speaking
  });
});

elMute.addEventListener('click', () => {
  STATE.muted = !STATE.muted;
  elMute.textContent = STATE.muted ? L().voiceOff : L().voiceOn;
  elMute.classList.toggle('active', STATE.muted);
  if (!STATE.muted) speak(L().voiceToggleOn);
  else if (window.speechSynthesis) window.speechSynthesis.cancel();
});

// ═══════════════════════════════════════════════════════════════
//  SCREEN: LANGUAGE SELECTION
// ═══════════════════════════════════════════════════════════════
function goLang() {
  STATE.screen = 'lang';
  STATE.buffer = '';
  STATE.attempts = 0;
  showNumpad(false);
  clearActions();
  elStep.textContent = T.english.stepLang;
  elTitle.textContent = 'Emeka ATM';
  elBody.textContent = 'Welcome to Emeka ATM. Select language / Zaɓi harshe / Họrọ asụsụ / Yan èdè';
  elBody.className = '';
  elEcho.textContent = '';

  (['english', 'hausa', 'igbo', 'yoruba']).forEach(key => {
    const label = T[key]['langBtn_' + key];
    addBtn(label, key === 'english' ? 'primary' : '', () => {
      STATE.lang = key;
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      speak(T[key].welcome);
      setTimeout(goPin, 1600);
    });
  });
  speak(`${T.english.welcome} ${T.english.selectLang}`);

  focusFirst();
}

// ═══════════════════════════════════════════════════════════════
//  SCREEN: PIN
// ═══════════════════════════════════════════════════════════════
function goPin() {
  STATE.screen = 'pin';
  STATE.buffer = '';
  numCfg = { maxLen: 4, mask: true };
  showNumpad(true);
  clearActions();

  const l = L();
  setScreen(l.stepPin, l.enterPin, l.enterPinMsg);
  addBtn(l.confirmPin, 'primary', doConfirmPin);
  addBtn(l.cancel, 'danger', goLang);

  speak(l.enterPinMsg);
  focusFirst();
}

function doConfirmPin() {
  if (STATE.buffer === CORRECT_PIN) {
    STATE.attempts = 0;
    speak(L().menuMsg);
    setTimeout(goMenu, 900);
  } else {
    STATE.attempts++;
    STATE.buffer = '';
    elEcho.textContent = '';
    if (STATE.attempts >= 3) {
      showNumpad(false);
      clearActions();
      const l = L();
      setScreen(l.stepPin, l.blockedTitle, l.blockedMsg, 'error');
      addBtn(l.startOver, 'danger', goLang);
      speak(l.blockedMsg);
      focusFirst();
    } else {
      const msg = L().wrongPin(3 - STATE.attempts);
      setScreen(L().stepPin, L().enterPin, msg, 'error');
      speak(msg);
    }
  }
}

// ═══════════════════════════════════════════════════════════════
//  SCREEN: MAIN MENU
// ═══════════════════════════════════════════════════════════════
function goMenu() {
  STATE.screen = 'menu';
  STATE.buffer = '';
  showNumpad(false);
  clearActions();

  const l = L();
  setScreen(l.stepMenu, l.menuTitle, l.menuMsg);
  addBtn(l.withdraw, 'primary', goWithdraw);
  addBtn(l.checkBalance, 'primary', goBalance);
  addBtn(l.transfer, 'primary', goTransferAcc);
  addBtn(l.exit, 'danger', goLang);

  speak(`${l.menuMsg} ${l.withdraw}. ${l.checkBalance}. ${l.transfer}. ${l.exit}.`);
  focusFirst();
}

// ═══════════════════════════════════════════════════════════════
//  SCREEN: BALANCE
// ═══════════════════════════════════════════════════════════════
function goBalance() {
  STATE.screen = 'balance';
  showNumpad(false);
  clearActions();

  const l = L();
  const msg = l.balanceMsg(fmt(STATE.balance));
  setScreen(l.stepAction, l.balanceTitle, msg, 'success');
  elEcho.textContent = fmt(STATE.balance);

  addBtn(l.backMenu, 'primary', goMenu);
  addBtn(l.logout, 'danger', goLang);

  speak(msg);
  focusFirst();
}

// ═══════════════════════════════════════════════════════════════
//  SCREEN: WITHDRAW — enter amount
// ═══════════════════════════════════════════════════════════════
function goWithdraw() {
  STATE.screen = 'withdraw';
  STATE.buffer = '';
  numCfg = { maxLen: 7, mask: false };
  showNumpad(true);
  clearActions();

  const l = L();
  setScreen(l.stepAction, l.withdrawTitle, l.enterAmountMsg);
  addBtn(l.confirmAmount, 'primary', doConfirmWithdrawAmount);
  addBtn(l.back, 'muted', goMenu);

  speak(l.enterAmountMsg);
  focusFirst();
}

function doConfirmWithdrawAmount() {
  const amt = parseInt(STATE.buffer);
  if (!amt || amt <= 0) { speak(L().invalidAmount); return; }
  STATE.pendingAmount = amt;
  goConfirmWithdraw();
}

function goConfirmWithdraw() {
  STATE.screen = 'confirm_withdraw';
  showNumpad(false);
  clearActions();

  const l = L();
  const msg = l.confirmWithdrawMsg(fmt(STATE.pendingAmount));
  setScreen(l.stepConfirm, l.confirmWithdrawTitle, msg);

  addBtn(l.yes, 'success', doWithdraw);
  addBtn(l.no, 'danger', goWithdraw);
  addBtn(l.back, 'muted', goMenu);

  speak(msg);
  focusFirst();
}

function doWithdraw() {
  const l = L();
  if (STATE.pendingAmount > STATE.balance) {
    const msg = l.insufficientMsg(fmt(STATE.balance));
    setScreen(l.stepConfirm, l.insufficientTitle, msg, 'error');
    clearActions();
    addBtn(l.tryAgain, 'primary', goWithdraw);
    addBtn(l.backMenu, 'muted', goMenu);
    speak(msg);
    focusFirst();
    return;
  }
  STATE.balance -= STATE.pendingAmount;
  goReceiptWithdraw();
}

function goReceiptWithdraw() {
  STATE.screen = 'receipt_w';
  showNumpad(false);
  clearActions();

  const l = L();
  const now = new Date();
  const date = now.toLocaleDateString('en-NG');
  const time = now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
  const msg = l.successWithdrawMsg(fmt(STATE.pendingAmount), fmt(STATE.balance));

  setScreen(l.stepConfirm, l.successWithdrawTitle, msg, 'success');
  elEcho.textContent = `${l.receiptDate}: ${date}   ${l.receiptTime}: ${time}`;

  addBtn(l.anotherTx, 'primary', goMenu);
  addBtn(l.logout, 'danger', goLang);

  speak(msg);
  focusFirst();
}

// ═══════════════════════════════════════════════════════════════
//  SCREEN: TRANSFER — step 1: account number
// ═══════════════════════════════════════════════════════════════
function goTransferAcc() {
  STATE.screen = 'transfer_acc';
  STATE.buffer = '';
  numCfg = { maxLen: 10, mask: false };
  showNumpad(true);
  clearActions();

  const l = L();
  setScreen(l.stepAction, l.transferTitle, l.enterAccMsg);
  addBtn(l.confirmAcc, 'primary', doConfirmTransferAcc);
  addBtn(l.back, 'muted', goMenu);

  speak(l.enterAccMsg);
  focusFirst();
}

function doConfirmTransferAcc() {
  if (STATE.buffer.length !== 10) {
    const msg = L().invalidAcc;
    elBody.textContent = msg;
    elBody.className = 'error';
    speak(msg);
    return;
  }
  STATE.pendingAcc = STATE.buffer;
  goTransferAmount();
}

// ── TRANSFER — step 2: amount ──
function goTransferAmount() {
  STATE.screen = 'transfer_amt';
  STATE.buffer = '';
  numCfg = { maxLen: 7, mask: false };
  showNumpad(true);
  clearActions();

  const l = L();
  const msg = l.enterTransAmtMsg(STATE.pendingAcc);
  setScreen(l.stepAction, l.transferTitle, msg);

  addBtn(l.confirmTransAmt, 'primary', doConfirmTransferAmount);
  addBtn(l.back, 'muted', goTransferAcc);

  speak(msg);
  focusFirst();
}

function doConfirmTransferAmount() {
  const amt = parseInt(STATE.buffer);
  if (!amt || amt <= 0) { speak(L().invalidAmount); return; }
  STATE.pendingAmount = amt;
  goConfirmTransfer();
}

// ── TRANSFER — step 3: confirm ──
function goConfirmTransfer() {
  STATE.screen = 'confirm_transfer';
  showNumpad(false);
  clearActions();

  const l = L();
  const msg = l.confirmTransferMsg(fmt(STATE.pendingAmount), STATE.pendingAcc);
  setScreen(l.stepConfirm, l.confirmTransferTitle, msg);

  addBtn(l.yes, 'success', doTransfer);
  addBtn(l.no, 'danger', goTransferAmount);
  addBtn(l.back, 'muted', goMenu);

  speak(msg);
  focusFirst();
}

function doTransfer() {
  const l = L();
  if (STATE.pendingAmount > STATE.balance) {
    const msg = l.insufficientTransMsg(fmt(STATE.balance));
    setScreen(l.stepConfirm, l.insufficientTitle, msg, 'error');
    clearActions();
    addBtn(l.tryAgain, 'primary', goTransferAmount);
    addBtn(l.backMenu, 'muted', goMenu);
    speak(msg);
    focusFirst();
    return;
  }
  STATE.balance -= STATE.pendingAmount;
  goReceiptTransfer();
}

function goReceiptTransfer() {
  STATE.screen = 'receipt_t';
  showNumpad(false);
  clearActions();

  const l = L();
  const now = new Date();
  const date = now.toLocaleDateString('en-NG');
  const time = now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
  const msg = l.successTransferMsg(fmt(STATE.pendingAmount), STATE.pendingAcc, fmt(STATE.balance));

  setScreen(l.stepConfirm, l.successTransferTitle, msg, 'success');
  elEcho.textContent = `${l.receiptDate}: ${date}   ${l.receiptTime}: ${time}`;

  addBtn(l.anotherTx, 'primary', goMenu);
  addBtn(l.logout, 'danger', goLang);

  speak(msg);
  focusFirst();
}

// ═══════════════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════════════
goLang();