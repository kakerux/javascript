// fetch()
// when we want to hit API in js -- (application proggrMAING Interface)

// HTTP methods:
// > get,post,put,delete,patch
// 
// fetch method by default is get method but we can also post,delete,put,patch

// promise - is object - 3 steps
// fullfill,pending,reject

// fetch() => promise => async await get -> api -> server(slow)
// it returns promise , to handle we have to do async and await both at same time
// async await to get data


// JSON -> javascriopt object notation 
// .json when we have to check frontend is connected to backenc when we dont have database
// data always stored in string in json


async function demo(){
    let response = await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await response.json()
    // console.log(data)
    // let name = data.map((e)=>{return e.name})
    // console.log(name)
    let apidata = data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.name}</td>
    <td> ${e.email} </td>
    </tr>

    `).join(" ")   // joins do
    let savedata = document.querySelector('#savedata')
    savedata.innerHTML = apidata
}

demo()

// why do i have to print data in tbody when i have all the data in tablerow, why
// is not alalyzing that i have made table row and also putted the data in it