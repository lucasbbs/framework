import { User } from './models/User';

const user = User.build({ id: 1 });

// user.attributes.set({ name: 'Another name', age: 79 });

// // user.events.on('change', () => {
// //   console.log('Teste 1,2,3');
// // });

// // user.events.trigger('change');

user.on('change', () => {
  console.log(user);
});

user.fetch();
// // user.trigger('click');

// user.set({ name: 'New Name' });
