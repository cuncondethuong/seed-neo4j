const { getOne, getAll } = require('../repository/index');
const { addUsers } = require('../neo4j/neo4j.service');

module.exports = {
  getUsers: async (request, response) => {
    const data = await getAll();
    return response.status(200).json(data);
  },
  seedToNeo4j: async (request, response) => {
    const data = await getAll();
    const users = data.map(u => {
      return {
        userId: u._id.toString(),
        username: u.UserName,
        avatar: u.Image.ImageUrl,
      };
    });
    const neo4jdata = await addUsers(users);
    return response.status(200).json(neo4jdata);
  }
}