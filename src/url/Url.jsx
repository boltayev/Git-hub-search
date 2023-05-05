async function getData(url) {
  let r = await fetch(url);

  return await r.json();
}
export default getData;