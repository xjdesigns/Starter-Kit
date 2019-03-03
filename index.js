const html = document.querySelector('html')
const body = document.querySelector('body')
const darkmodeToggle = document.querySelector('[data-id="darkmodeToggle"]')
const awesomeMenu = document.querySelector('[data-id="awesome-menu"]')
const awesomeInner = document.querySelector('[data-id="awesome-inner"]')

// LAST ACTION
const lastAction = document.querySelector('[data-id="last-action"]')
lastAction.innerHTML = 'none'

// FONT SIZE
const fontSizeValue = document.querySelector('[data-id="fontSizeValue"]')

// SCANNER
const simPnlScanner = document.querySelector('[data-id="sim-pnl-scanner"]')
const simExtScanner = document.querySelector('[data-id="sim-ext-scanner"]')
const simQuickScan = document.querySelector('[data-id="sim-quick-scan"]')

// CARD READER
const simPnlCr = document.querySelector('[data-id="sim-pnl-cr"]')
const simExtCr = document.querySelector('[data-id="sim-ext-cr"]')
const simQuickCr = document.querySelector('[data-id="sim-quick-cr"]')

// PRINTER
const simPnlPrinter = document.querySelector('[data-id="sim-pnl-printer"]')
const simExtPrinter = document.querySelector('[data-id="sim-ext-printer"]')

// CASH DRAWER
const simPnlCashDrawer = document.querySelector('[data-id="sim-pnl-cash-drawer"]')
const simExtCashDrawer = document.querySelector('[data-id="sim-ext-cash-drawer"]')

darkmodeToggle.onclick = function () {
  if (body.hasAttribute('data-mode')) {
    body.removeAttribute('data-mode')
  } else {
    body.setAttribute('data-mode', 'darkmode')
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

simQuickScan.onclick = function() {
  lastAction.innerHTML = `scan of item ${1234}`
}

simPnlCr.onclick = function() {
  simExtCr.classList.toggle('is-open')
}

simQuickCr.onclick = function() {
  lastAction.innerHTML = `card reader initialized`
}


simPnlPrinter.onclick = function() {
  simExtPrinter.classList.toggle('is-open')
}

simPnlCashDrawer.onclick = function() {
  simExtCashDrawer.classList.toggle('is-open')
}

fontSizeValue.onclick = function(ev) {
  const val = ev.target.value
  if (val) {
    html.setAttribute('data-font', val)
  }
}
