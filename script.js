let audioContext= new AudioContext();
let keyWhite=['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ'] 
let keyBlack=['KeyQ','KeyW','KeyE','KeyT','KeyY']
let btn=document.querySelector('.bx-menu-alt-right')
let menu=document.querySelector('.header__nav')
btn.addEventListener('click',()=>{
    menu.classList.toggle('open')
})
document.addEventListener('keydown',e=>{
    if (keyWhite.includes(e.code) || keyBlack.includes(e.code)) {
        switch (e.code){
            case 'KeyA':
                jsNota(174.614)
                break
            case 'KeyS':
                jsNota(195.998)
                break
            case 'KeyD':
                jsNota(220.000)
                break
            case 'KeyF':
                jsNota(246.942)
                break
            case 'KeyG':
                jsNota(261.626)
                break
            case 'KeyH':
                jsNota(293.665)
                break
            case 'KeyJ':
                jsNota(329.628)
                break
            case 'KeyQ':
                jsNota(184.997)
                break
            case 'KeyW':
                jsNota(207.652)
                break
            case 'KeyE':
                jsNota(233.082)
                break
            case 'KeyT':
                jsNota(277.183)
                break
            case 'KeyY':
                jsNota(311.127)
                break
            default:
                break
        }
    }
})


function jsNota(frecuency){
    // create a oscillator node
        let osc= audioContext.createOscillator();
        // set type 
        osc.type='triangle';
        // set frecuency
        osc.frequency.value=frecuency;       
      
        let gain = audioContext.createGain()    
        // start oscillator
        osc.start();
        // stop it ofter a second
        osc.stop(audioContext.currentTime+1)
        // conect our graph
        osc.connect(gain).connect(audioContext.destination)
        gain.gain.exponentialRampToValueAtTime(0.001,audioContext.currentTime +0.5);
    }


    function jstop(){
        // create a oscillator node
            let osc= audioContext.createOscillator();
            // set type 
            let frecuency=Math.floor(Math.random()*(400-100+1)+100)
            const wave=['triangle','sine','sawtooth','square']
            let nwave=Math.floor(Math.random()*3)
            osc.type=wave[nwave];
            // set frecuency
            osc.frequency.value=frecuency;       
            osc.frequency.exponentialRampToValueAtTime(600,audioContext.currentTime+1.5)

            let gain = audioContext.createGain()    
            // start oscillator
            osc.start();
            // stop it ofter a second
            osc.stop(audioContext.currentTime+1)
            // conect our graph
            osc.connect(gain).connect(audioContext.destination)
            gain.gain.exponentialRampToValueAtTime(0.001,audioContext.currentTime +1);
        }    


