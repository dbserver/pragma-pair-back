import userIntegration from '../integration/userIntegration';
import moment from 'moment';
import {DATEFORMAT, TIMEFORMAT} from '../constants/constants';
import User from '../models/User';

let user = userIntegration.getUser({ User });

const getUser = (id) => {
	return user;
};

const setLastVote = (user, date) => {
	user.lastVote = date;
};

const canUserVote = (user, time) => {
	return haventPassedNoon(time) && (!user.lastVote || haventUserVotedToday(user.lastVote));
};

const haventUserVotedToday = (lastVote) => {
	let today = moment();

	return lastVote && today.diff(moment(lastVote, DATEFORMAT), 'days') > 0;
};

const haventPassedNoon = (time) => {
	const noonTime = moment('12:00:00', TIMEFORMAT);

	return noonTime.diff(time) > 0;
};

export default {
	getUser,
	setLastVote,
	canUserVote
}