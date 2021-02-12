//function statement areYouPlayingBanjo param name
function areYouPlayingBanjo(name) {
/*if name at index 0 is equal 'R' OR name at 0 index is equal 'r'*/
	if (name[0] == 'R' || name[0] == 'r')
//return name + " plays banjo";
		return name + " plays banjo";
//else, the last did not work, go on to next
	else
//return name + ' does not play banjo'
		return name + " does not play banjo";
}