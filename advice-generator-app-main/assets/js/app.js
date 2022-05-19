const get_advice = async () =>{
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data);

    document.getElementById('adviceId').innerHTML = data.slip.id
    document.getElementById('quote').innerHTML = data.slip.advice
}
window.onload = get_advice()