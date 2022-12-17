let renderPage = (resultsArr) => {
    console.log(resultsArr);
    let results = Array.isArray(resultsArr) ? resultsArr[0] : resultsArr;
    let appBody = document.getElementsByClassName('row')[0];
    document.querySelectorAll('link[rel=stylesheet]')[0].setAttribute('href', 'results.css')
    appBody.innerHTML = 
    `<div class="col">
        <h1>Here are your results!</h1>          
    </div>
    <div class="col">
        <div class="card card0">
            <h3 id="title"></h3>
        </div>
        <a id="image-link" href="">
            <div class="card card1"></div>
        </a>              


        <a id="tripadvisor" href="https://www.tripadvisor.pt/" target="_blank">
            <div class="card card2"  rel="noreferrer noopener"></div>
        </a>
                    
        <a id="hotels" href="https://www.booking.com/index.pt.html?aid=376389;label=Hoteis-dHPE1sykMRe*x3Pll8k6awS267724756065:pl:ta:p1:p22.563.000:ac:ap:neg:fi:tikwd-65526620:lp1011742:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfNeh-lbHkPZfvshG1kRNbU;ws=&gclid=Cj0KCQiAqOucBhDrARIsAPCQL1ZxNvIQ7sVjOJZpstTTEdFR5v72lQdpJ_sV3TnWPtWy9y4AUpCpaikaAjWEEALw_wcB" target="_blank">
            <div class="card card3" rel="noreferrer noopener"></div> 
        </a>
        </div>`;
    let [title, image] = document.getElementsByClassName('card');
    let imageLink = document.getElementById('image-link');


    if(results.location) {
        console.log('location');
        title.innerHTML = 
        `<h3>${results.location}</h3>`;
    }

    console.log(results);
    console.log(imageLink);

    image.style.backgroundImage=`url(${results.image})`;

    if (Array.isArray(resultsArr) && resultsArr[1]) {
        let trip = document.getElementById('tripadvisor');
        trip.innerHTML = 
        `<a id="tripadvisor" href="${resultsArr[1].link}" target="_blank">
        <div class="card card2" rel="noreferrer noopener" style="background-image: url('Tripadvisor-Emblem.png')"></div>
        </a>`;
        //document.getElementsByClassName('card2')[0].style.backgroundImage = 'url("")';

        //document.getElementById('tripadvisor').setAttribute('href', resultsArr[1].link);

        let agency = document.getElementById('hotels');
        agency.innerHTML = 
        `<a id="hotels" href="${results.link}" target="_blank">
            <div class="card card3" rel="noreferrer noopener"></div> 
        </a>`

        document.getElementsByClassName('card3')[0].style.backgroundImage = "url('Airbnb-Logo.png')";
    } else {
        imageLink.setAttribute('href', results.link);
        imageLink.setAttribute('target', '_blank');
    }

}


export { renderPage };