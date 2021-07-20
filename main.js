// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// ========== Opdracht 1 ==========
function toBeSold() {
// nieuwe array met aantallen per tv om nog te verkopen
  const stockLeft = inventory.map((inventory) => {
    return inventory.originalStock - inventory.sold;
  });
// array doorlopen en bij elkaar optellen.
  let toBeSold = 0;
  for (let i = 0; i < stockLeft.length; i++) {
    toBeSold += stockLeft[i];
  }
  return toBeSold;
}
// naar HTML pagina plaatsen.
// Onderstaande 2 regels als comment ivm consoleLog in IDE
// const soldHTML = document.getElementById('toBeSold');
// soldHTML.textContent = toBeSold().toString();

// ========== Einde Opdracht 1 ==========
// ========== Opdracht 2a ==========
const tweeA = inventory.map((inventory) => {
  return inventory.type;
});

// ========== Einde Opdracht 2a ==========
// ========== Opdracht 2b ==========
const inventoryToBeSold = inventory.filter((inventory) => {
  return inventory.originalStock - inventory.sold === 0;
});

// ========== Einde Opdracht 2b ==========
// ========== Opdracht 2c ==========
const ambiTv = inventory.filter((inventory) => {
  return inventory.options.ambiLight === true;
});

// ========== Einde Opdracht 2c ==========
// ========== Opdracht 2d ==========
  function lowToHigh() {
    const lowPriceHighPrice = inventory.sort((a, b) => {
      return a.price - b.price;
    });
    return lowPriceHighPrice;
  };

// ========== Einde Opdracht 2d ==========


// ========== Opdracht 3a ==========

// ========== Einde Opdracht 3b ==========


// ========== Opdracht 4 ==========

// ========== Einde Opdracht 4  ==========


// ========== Opdracht 5a ==========

// ========== Einde Opdracht 5a ==========


// ========== Opdracht 5b ==========

// ========== Einde Opdracht 5b ==========


// ========== Opdracht 5c ==========

// ========== Einde Opdracht 5c ==========


// ========== Opdracht 5d ==========

// ========== Einde Opdracht 5d ==========


// ========== Opdracht 5e ==========

// ========== Einde Opdracht 5e ==========


// ========== Opdracht Bonus ==========

// ========== Einde Opdracht Bonus ==========

