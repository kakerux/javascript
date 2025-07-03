function fun(){
    let val1 = document.querySelector('#no1').value
    let val2 = document.querySelector('#no2').value
    let val3 = document.querySelector('#no3').value
    let val4 = document.querySelector('#no4').value
    let val5 = document.querySelector('#no5').value

    // document.querySelector('#answer').textContent=val1,val2,val3,val4,val5
    // document.querySelector('#ans').textContent=val1
  let div =  document.querySelector('#an')
  let head = div.getElementsByTagName('h1')
  head[0].textContent="Name:" +val1
  head[1].textContent="Class :"+val2
  head[2].textContent="Language:"+val3
  head[3].textContent="CITY: "+val4
  head[4].textContent="Subject"+val5

    return false
}

// if you want to use br tag there than use innerHTML not textcontent