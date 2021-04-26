const url = new URL('https://api.publicapis.org/categories');
const headers = {
    'Accept': '*'
};
const inputStr = "An";
(async function () {
    debugger;
  const response = await fetch( url.toString(), {headers} );
  const data = await response.json();
  console.log(data.filter(f=>f.startsWith(inputStr)))
})()
