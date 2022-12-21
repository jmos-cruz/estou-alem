const bar = [
    {link1 : 'https://www.tripadvisor.com/Attraction_Review-g189158-d3177202-Reviews-Groove_Bar-Lisbon_Lisbon_District_Central_Portugal.html'}, 
    {link2 : 'https://www.tripadvisor.com/Attraction_Review-g189158-d245836-Reviews-Kings_Queens-Lisbon_Lisbon_District_Central_Portugal.html}'}, 
    {link3 : 'https://www.tripadvisor.com/Attraction_Review-g189158-d606552-Reviews-Finalmente_Club-Lisbon_Lisbon_District_Central_Portugal.html'}, 
    {link4 : 'https://www.tripadvisor.com/Attraction_Review-g189158-d245684-Reviews-Incognito-Lisbon_Lisbon_District_Central_Portugal.html'}, 
    {link5 : 'https://www.tripadvisor.com/Attraction_Review-g189158-d195865-Reviews-Kremlin-Lisbon_Lisbon_District_Central_Portugal.html'}
]
    
    const disco = [
    {link1 : 'https://www.cntraveler.com/bars/lisbon/park'}, 
    {link2 : 'https://www.cntraveler.com/bars/lisbon/cinco-lounge'}, 
    {link3 : 'https://www.cntraveler.com/bars/lisbon/foxtrot'}, 
    {link4 : 'https://www.cntraveler.com/bars/lisbon/pensao-amor'}, 
    {link5 : 'https://www.cntraveler.com/bars/lisbon/red-frog'}
]
    
    const resultsList = [
        {
        arr: ['a'],
        
        destination : disco[Math.floor(Math.random() * disco.length)],
        
        img: 'Img/bar.png'
            
        },

        {
        arr: ['b'],
        
        destination : bar[Math.floor(Math.random() * bar.length)] ,
        
        img: 'Img/disco.png'
        
    }];

    let filterResult = (resultArr) =>{

        for(let i = 0; i<resultsList.length; i++){
        if(resultsList[i].arr.toString() === resultArr.toString()){
            return {link: Object.values(resultsList[i].destination)[0], image: resultsList[i].img};
        }
    }};

    export { filterResult };