import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 0 });

// user.attributes.set({ name: 'Another name', age: 79 });

// // user.events.on('change', () => {
// //   console.log('Teste 1,2,3');
// // });

// // user.events.trigger('change');

user.on('save', () => {
  console.log(user);
});

user.save();
// // user.trigger('click');

// user.set({ name: 'New Name' });
