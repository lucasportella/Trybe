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
  
  const getUserName = async (userID) => {
    return await findUserById(userID).then(user => user.name);
  };

  describe('tests find users', () => {
    it('should return user name Mark', () => {
      return getUserName(4).then(userName => {
        expect(userName).toBe('Mark');
      })
    })
    it('should return error', () => {
      return getUserName(2).catch(aaa => {
        expect(aaa).toEqual({ error: 'User with 2 not found.' });
      })
    })
  })