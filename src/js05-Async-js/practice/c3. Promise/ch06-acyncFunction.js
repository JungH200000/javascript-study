export const printMenus = async () => {
  const response = await fetch('https://learn.codeit.kr/api/menus');
  const data = await response.json();

  console.log('Finished');
  console.log(data);
};
