async function postData(url= '',data={}){
    const response = await fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        headers:{
            
            "Content-type": "application/json; charset=UTF-8"
            
            
        },
        AccessControlAllowOrigin: '*',
        ReferrerPolicy: 'no-referrer',
        redirect: 'follow',
        body: JSON.stringify(data)
    });
    return response.json();
}
function print(){
   console.log("getElementById");
   console.log(getElementById("auto"));
}
postData('https://l-sh.herokuapp.com/api/url/shorten/',
{"longUrl":"https://codeforces.com/"})
.then(response => response.json()).
then(data=>{console.log('Sucess: ',data);}).
catch((err)=> {console.error('Error: ',err);});




// document.getElementById("subbb").addEventListener('click',
// postData('https://l-sh.herokuapp.com/api/url/shorten/',{
//     longUrl: document.getElementById("auto")
// }).then(data => {
//     console.log(data);
// })
// // print
// );

// document.getElementById("subbb").addEventListener('click',()=> console.log('hey'));