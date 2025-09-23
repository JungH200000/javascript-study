/*=====11. 내 노트북 용량은?=====*/
function teraToGiga(tera) {
  let giga = tera * 1024;
  console.log(tera + 'TB는');
  console.log(giga + 'GB 입니다.');
}

function teraToMega(tera) {
  let mega = tera * 1024 * 1024;
  console.log(tera + 'TB는');
  console.log(mega + 'MB 입니다.');
}

teraToGiga(2);
teraToMega(2);
