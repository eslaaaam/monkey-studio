/*!
 * Created: 28 Jan, 2022.
 */

/**
 * Dependencies.
 */
const fs = require('fs');

const folderName = '/Users/pickle/source';

try {
	if (!fs.existsSync(folderName)) {
		fs.mkdirSync(folderName);
	}
} catch (err) {
	console.error(err);
}
