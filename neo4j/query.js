module.exports = {
  createUser() {
    return `
      CREATE (u: User { username: $username, userId: $userId, avatar: $avatar })
      RETURN u;
    `;
  }
} 