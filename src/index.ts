import { User } from './Models/User';

const user = new User({ name: 'new record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
	console.log('user changed');
});

user.set({ name: 'new name' });
