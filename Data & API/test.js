console.log('about to fetch a rainbow')

catchRainbow()
.catch(error => {
    console.log('ERROR!');
    console.error(error);
});

// better way of using fetch()
async function catchRainbow() {
    const response = await fetch('rainbow.jpg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}