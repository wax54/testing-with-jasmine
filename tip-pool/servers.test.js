describe("Servers test", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  describe("submitServerInfo()", function() {
   
    it("should add a new server to allServers on submitServerInfo()", function () {
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
    
    it("should reset the serverNameInput to an empty string", function(){
      expect(serverNameInput.value).toEqual('');
    });
    it("should be able to handle spaces in server names", function () {
      serverNameInput.value = 'Gene Barker';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(2);
      expect(allServers['server' + serverId].serverName).toEqual('Gene Barker');
    });
    it("should not update anything if the serverNameInput is empty", function () {
      allServers = {};
      expect(Object.keys(allServers).length).toEqual(0);

      serverNameInput.value = '';
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(0);
    });
  });

  describe("updateServerTable tests", function() {

    it("should update the serverTbody to include the new server", function(){
      expect(serverTbody.children[0].children[0].innerText).toEqual('Alice');
    });
  });

  describe("appendDeleteBtn tests", function() {

    it("should append a td with a value of 'X' to each server row", function(){
      expect(serverTbody.children[0].children[2].innerText).toEqual('X');
      expect(serverTbody.children[0].children[2].classList.contains('delButton')).toBe(true);
    });
  });

  describe("deleteServer tests", function() {

    it("should remove the table row from the dom and server from allServers", function(){
      serverTbody.children[0].children[2].click();
      expect(serverTbody.innerText).toEqual('');
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  });


  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
