import { User } from './Models/User';

const user = new User({ name: 'newer name', age: 0 });

user.on('save', () => {
	console.log(user);
});

user.save();
