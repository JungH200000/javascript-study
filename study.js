function printRank(first, second, ...others) {
  console.log('경시대회 최종 결과');
  console.log(`대상: ${first}`);
  console.log(`금상: ${second}`);
  for (const other of others) {
    console.log(`참가자: ${other}`);
  }
}

printRank('Chung', 'Ji', 'Hyun', 'Jung', 'Hak');
