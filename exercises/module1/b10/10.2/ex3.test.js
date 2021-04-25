const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('test getUserName', () => {
    it('test success', async () => {
      try {
        const getUser = await getUserName(2);
        expect(getUser).toBe('Mark')
      } catch (error) {
        expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' })
      }
    })
  })