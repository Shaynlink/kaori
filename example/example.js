/* eslint no-console: 0 */
const Kaori = require('../index');
const kaori = new Kaori();

kaori.search('danbooru', { tags: ['cat'], limit: 1, random: true })
	.then(images => console.log(images[0].common.fileURL))
	.catch(err => console.error(err));
