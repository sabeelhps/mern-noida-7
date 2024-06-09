function a() {
    console.log('Inside a');
    b()
    console.log('After calling b');
}


function b() {
    console.log('Inside b');
    c();
    console.log('after calling c')
}

function c() {
    console.log('Inside c');
}

a();