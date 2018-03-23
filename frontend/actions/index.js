// Action Creators

import * as types from './types';

export const addBioInfo = (header, content) => {
	return {
		type: types.ADD_BIO_INFO,
		header: header,
		content: content
	};
}

