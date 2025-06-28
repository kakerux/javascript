let h1 = document.getElementById('head1')

// css through js = element.style.property
h1.style.backgroundColor = 'blue'
h1.style.color = 'white'
h1.style.textDecoration = 'underline'
h1.style.border = '1px , solid , red'

let image = document.getElementById('image')
image.src = "lady.avif"    // in image we only changed the src everthing is same



// if you want to add attribute in html through js then by setAttribute which
// is a function than provide name and value of it .
let h2 = document.getElementById("head2")
h2.setAttribute('align' , 'center')


// if you want to remove a attribute from html through js use removeAttribute 
// and write the name of the attribute
let h3 = document.getElementById('head3')
h3.removeAttribute('style')