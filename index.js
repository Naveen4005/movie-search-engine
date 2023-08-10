    let button = document.getElementById('search');
button.addEventListener('click',()=>{
    let input = document.getElementById('input').value;
    input = encodeURIComponent(input);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '96c37efdb4msh9f5a52da1027bdfp1d2ac2jsn3797eadc0451',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input}`, options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = "";
            
            for(let j = 0; j<data.d.length; j++){
                let imgs = document.createElement('div');
                imgs.classList.add('imgs');
                imgs.dataset.id = data.d[j].id;
                imgs.style.backgroundImage = `url(${data.d[j].i.imageUrl})`;
                imgs.backgroundSize = "200px 300px";
                let divfilter = document.createElement('div');
                divfilter.classList.add('filter');
                let showinfo = document.createElement('button');
                showinfo.innerText = "show info";
                divfilter.append(showinfo);
                imgs.append(divfilter);
                
                document.getElementById('result').append(imgs);
            }
        })
});