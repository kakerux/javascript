// cntrl c stops the json server

// if you edit the json file you have to restart it or it will not work 

async function fet() {
    let res = await fetch("http://localhost:3000/username")
    let data = await res.json()         //the data comes in string format
    // console.log(data)

    let st = data.map((item)=>`
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.contact}</td>
    <td>${item.city}</td>
    </tr>
    `).join(" ")
    document.querySelector('#storedata').innerHTML=st
}
fet()

