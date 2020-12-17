let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');
let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

/**
 *  create server object and add to allServers, update html and reset input
 *  does nothing if server name is empty
 * 
 *  @param { event } evt not used.
 */
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

/**
 *  Empties the serverTbody.innerHTML then, Creates a table row element for 
 *    each server in allServers and passes to appendTd function with updated values
 */
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}
/**
 *  Creates a new td with the innerText of 'X' and deleteServer click listener
 *   and appends it to the passed tr
 * 
 * @param {HTMLTableRowElement} tr 
 */

function appendDeleteBtn(tr){
    let newTd = document.createElement('td');
    newTd.innerText = 'X';
    newTd.classList.add('delButton');
    newTd.addEventListener('click', deleteServer);
    tr.append(newTd);
}
/**
 * removes the parent tr of the passed event and removes the row's id from allServers
 * 
 * @param { event } evt 
 */
function deleteServer(evt){
  parent = evt.target.parentElement;
  key = parent.id;
  parent.remove();
  delete allServers[key];
}
