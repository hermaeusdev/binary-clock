(function() {
	window.onload = function() {
const b_i = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3], [0], [0, 3]];
function getTime() {
	return (new Date()).toLocaleTimeString('en-CA', {hour12:false})
	.split(/:| /).map(t => t.padStart(2,'0'));
}
function updateDOM() {
	const time = getTime(), columns = document.querySelectorAll('.container > div');  
	let a,index = 0;
	// Reset Lights //
	a = document.querySelectorAll('.one');
	for (let i = 0; i < a.length; i++) a[i].classList.remove('one');
	// Assign Lights //
	for (let j = 0, len = columns.length; j < len; j++) {
		a = b_i[time[columns[j].dataset.tid][index]];
		for (let k = 0, _len = a.length; k < _len; k++)
			columns[j].children[a[k]].classList.add('one');
		index = Number(!index);
	}
} setInterval(updateDOM, 1000); updateDOM(); } })()
