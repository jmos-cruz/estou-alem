let renderPage = (resultsArr) => {
    let results = Array.isArray(resultsArr) ? resultsArr[0] : resultsArr;
    let appBody = document.getElementsByClassName('row')[0];
    document.querySelectorAll('link[rel=stylesheet]')[0].setAttribute('href', '/stylesheets/results.css')
    appBody.innerHTML = 
    `<div class="col">
        <h1>Here are your results!</h1>          
    </div>
    <div class="col">
        <div class="card card0">
            <h3 id="title"></h3>
        </div>
        <a id="image-link">
            <div class="card card1"></div>
        </a>              

        <div id="tripadvisor">
            <div class="card card2"  rel="noreferrer noopener"></div>
        </a>
        </div>
                    
        <div id="hotels">
            <div class="card card3" rel="noreferrer noopener"></div> 
        </a>
        </div>`;
    let [title, image] = document.getElementsByClassName('card');
    let imageLink = document.getElementById('image-link');


    if(results.location) {
        title.innerHTML = 
        `<h3>${results.location}</h3>`;
    }

    image.style.backgroundImage=`url(${results.image})`;

    if (Array.isArray(resultsArr) && resultsArr[1]) {
        let trip = document.getElementById('tripadvisor');
        trip.innerHTML = 
        `<a id="tripadvisor" href="${resultsArr[1].link}" target="_blank">
            <div class="card card2" rel="noreferrer noopener" style="background-image: url('../images/Tripadvisor-Emblem.png')"></div>
        </a>`;

        let agency = document.getElementById('hotels');
        agency.innerHTML = 
        `<a id="hotels" href="${results.link}" target="_blank">
            <div class="card card3" rel="noreferrer noopener"></div> 
        </a>`
        
        document.getElementsByClassName('card3')[0].style
        .backgroundImage = results.link.includes("airbnb") ? "url('../images/Airbnb-Logo.png')" : "url('../images/Booking-Logo.png')";
    } else {
        title.innerHTML = 
        `<h3>Click the image!</h3>`;
        imageLink.setAttribute('href', results.link);
        imageLink.setAttribute('target', '_blank');
        let tripadvisor = document.getElementById('tripadvisor');
        let hotel = document.getElementById('hotels');
        tripadvisor.remove();
        hotel.remove();
    }

}

export { renderPage };