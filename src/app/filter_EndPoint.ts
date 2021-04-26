filterEndPoint(inputStr : string)
{
    let url = new URL('https://api.publicapis.org/categories');
    let headers = {
        'Accept': '*'
    };
    fetch(url.toString(), { headers }).then(response => {
        response.json().then(jsonRes => {
            console.log(jsonRes.filter((f: any) => { f.startsWith(inputStr) }));
        })
        
    })   
}
