const body = document.querySelector('body')
const darkmodeToggle = document.querySelector('[data-id="darkmodeToggle"]')
const awesomeMenu = document.querySelector('[data-id="awesome-menu"]')
const awesomeInner = document.querySelector('[data-id="awesome-inner"]')

// SCANNER
const simPnlScanner = document.querySelector('[data-id="sim-pnl-scanner"]')
const simExtScanner = document.querySelector('[data-id="sim-ext-scanner"]')

// CARD READER
const simPnlCr = document.querySelector('[data-id="sim-pnl-cr"]')
const simExtCr = document.querySelector('[data-id="sim-ext-cr"]')

// PRINTER
const simPnlPrinter = document.querySelector('[data-id="sim-pnl-printer"]')
const simExtPrinter = document.querySelector('[data-id="sim-ext-printer"]')

// CASH DRAWER
const simPnlCashDrawer = document.querySelector('[data-id="sim-pnl-cash-drawer"]')
const simExtCashDrawer = document.querySelector('[data-id="sim-ext-cash-drawer"]')

darkmodeToggle.onclick = function () {
  if (body.hasAttribute('data-id')) {
    body.removeAttribute('data-id')
  } else {
    body.setAttribute('data-id', 'darkmode')
  }
}

awesomeMenu.onclick = function() {
  this.classList.toggle('is-open')
}

awesomeInner.onclick = function(ev) {
  ev.stopPropagation()
}

simPnlScanner.onclick = function() {
  simExtScanner.classList.toggle('is-open')
}

simPnlCr.onclick = function() {
  simExtCr.classList.toggle('is-open')
}

simPnlPrinter.onclick = function() {
  simExtPrinter.classList.toggle('is-open')
}

simPnlCashDrawer.onclick = function() {
  simExtCashDrawer.classList.toggle('is-open')
}
