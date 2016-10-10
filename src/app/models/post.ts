export interface Post {
	_id?: string;
	title: string;
	body: string;
	mainPicture: string;
	featured: boolean;
	category: {
		id: string;
		name: string;
	},
	tags: {
		id: string,
		name: string
	}[]

}