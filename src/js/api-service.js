// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

import shortid from "shortid";

// const fetchUserById = id => {
//   console.log('fetchUserById');
// };

// const updateUserById = id => {
//   console.log('updateUserById');
// };

// экспорт обьекта с тремя функциями по дефолту
// export default {fetchAllUsers, fetchUserById, updateUserById};

export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};

export const updateUserById = id => {
  console.log('updateUserById');
};

export const x = 88;
export const y = 'abcdefg';

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };
  console.log(user);
};
