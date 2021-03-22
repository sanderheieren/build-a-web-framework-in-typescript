import { User } from './Models/User';

const user = new User({ name: 'new record', age: 0 });

// returns the on function from the Eventing class
// which is what we invoke
user.on('change', () => {
	console.log('user was changed');
});
