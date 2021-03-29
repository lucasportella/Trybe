const doingThings = param => {param()};
const wakeUp = () => console.log('Acordando!!');
const breakFast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

doingThings(sleep);