const one = () => {
    console.log('one');
    two();
    console.log('one again');
}   

const two = () => {
    console.log('two');
    three();
    console.log('two again');
}

const three = () => {
    console.log('three');
    console.log('three again');
}

one();