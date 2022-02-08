const { getDriver } = require('./neo4j-connect');
const { createUser } = require('./query');

module.exports = {
  addUsers(arr) {
    const promises = [];
    console.log(arr);
    for (const user of arr) {
      promises.push(executeWriteQuery(createUser(), user));
    }
    return Promise.all(promises);
  },
  deleteAll() {
    return executeWriteQuery(
      'MATCH (n) DETACH DELETE n',
      {},
    );
  }
}

async function executeWriteQuery(query, params) {
  const driver = await getDriver();
  const session = driver.session({
    database: 'neo4j',
    defaultAccessMode: 'WRITE',
  });
  try {
    const res = await session.writeTransaction((tx) => tx.run(query, params));
    return res.records;
  } catch (error) {
    console.log(error);
  } finally {
    session.close();
  }
}