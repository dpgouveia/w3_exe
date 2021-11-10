var options = {year: 'numeric', month: '2-digit', day: '2-digit' };
const cday = new Date().toLocaleDateString().split('/');
const out1 = `${cday[0]}-${cday[1]}-${cday[2]}`;
const out2 = `${cday[0]}/${cday[1]}/${cday[2]}`;
const out3 = `${cday[1]}-${cday[0]}-${cday[2]}`;
const out4 = `${cday[1]}/${cday[0]}/${cday[2]}`;
console.log(`${out1}, ${out2}, ${out3}, ${out4}`);
