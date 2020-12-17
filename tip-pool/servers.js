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

    serverTbody.append(newTr);
  }
}
