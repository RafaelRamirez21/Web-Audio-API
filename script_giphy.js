// Consuming the giphy api
let ApiKey="ZRpModPxujQuFpATMKfBxOhuQD1TMAsF";
const ids=["3oEjHUj9u4xubEsEh2", "11WFJHBnMymuMU", "ivvpMyH9ohsRy", "l0MYScuujl9WdyWMU","v6LHovgJAefW8","giwiK9aUTAeqI", "dxgnIpsltlJ9RR93I0", "l4FsoQbfD0J53F8Xe"]
const divm=document.querySelector('.mid__mini--screen')
const getApi= async ()=>{
   
    const id=ids[Math.floor(Math.random()*8)]
    const res= await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${ApiKey}`)
    const data=await res.json();
    try {
        
        const img=data.data.images.fixed_height_small.url
        style=document.createElement('style')    
        document.head.appendChild(style)
        style.innerHTML=`.mid__mini--screen{
            background:url(${img})
        }`;
        const stylesheet=document.styleSheets[2]
        let boxParaRule;

        for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === '.container__banner') {
            boxParaRule = stylesheet.cssRules[i];
        }
        }
        const a=boxParaRule.style.setProperty('background', `url('${img}')`);
        // console.log(boxParaRule.style.cssText)
        setTimeout(getApi,1000)

    } catch (error) {
        console.log(error)
    }
   
    // return data.data.url
}
getApi()

