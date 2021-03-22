// import { UserProps } from './User';

export class Attributes<T> {
	constructor(private data: T) {}

	// limiting the different types K can be (name, age or id) bc in TS you can treat strings as types, because of how object keys are string
	get<K extends keyof T>(key: K): T[K] {
		return this.data[key];
	}

	set(update: T): void {
		// copy paste everything from 'update' onto 'this.data' (Object.assign)
		Object.assign(this.data, update);
	}
}

// const attrs = new Attributes<UserProps>({
// 	id: 5,
// 	age: 20,
// 	name: 'sander',
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('id');
