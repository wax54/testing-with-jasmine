describe("Servers test", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  describe("submitServerInfo()", function() {
   
    it("should be able to handle spaces in server names", function () {
      serverNameInput.value = 'Gene Barker';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(2);
      expect(allServers['server' + serverId].serverName).toEqual('Gene Barker');
    });

    it("should add a new server to allServers on submitServerInfo()", function () {
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
    
    it("should reset the serverNameInput to an empty string", function(){
      expect(serverNameInput.value).toEqual('');
    });
  });

  describe("updateServerTable()", function() {

    it("should update the serverTbody to include the new server", function(){
      expect(serverTbody.innerText).toEqual('Alice	$0.00');
    });
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
