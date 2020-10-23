import validatePassword from './js/validate-password';
console.log(validatePassword);

// импорт по дефолту (из api-service)
// import apiService from './js/api-service';
// console.log(apiService);

// импорт по именам (из api-service)
// import {
//   fetchAllUsers, 
//   fetchUserById,
//   x as somethindMy,
// } from './js/api-service';
// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(somethindMy);

// импортировать всё (из api-service)
import * as apiService from './js/api-service';
console.log(apiService);

