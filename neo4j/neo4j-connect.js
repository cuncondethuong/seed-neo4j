const neo4j = require('neo4j-driver');

let driver;

async function initDriver(uri, username, password) {
  driver = neo4j.driver(uri, neo4j.auth.basic(username, password));
  await driver.verifyConnectivity();
  return driver;
}

module.exports = {
  async getDriver() {
    const url = 'bolt://localhost:7687';
    await initDriver(
      url,
      'neo4j',
      'neo4j'
    );
    return driver;
  },
  closeDriver() {
    return driver && driver.close();
  }
} 