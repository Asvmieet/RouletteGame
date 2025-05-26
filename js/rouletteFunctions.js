
function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function regSpin(){
  var randomnum = Math.floor(Math.random()*37)

    checkWin(randomnum)
    console.log(`Reg Spin Result: ${randomnum}`)

    return randomnum

    }
    
    
    
    
    const biasnums = [1,4]
    let Rarray = []
    const biasArray = []
    
    // Set's up Rarray and biasArray. 
    
      for(let i = 0; i<=36;i++){
      Rarray.push(Math.floor(Math.random()*37))
        biasArray[i] = 0;
    }
    
    
    // Locates bias numbers in Rarray and marks their location in BiasArray
    
    
    function biasSpin(){
    
    for(let r = 0; r<=36;r++){
    for(let bn = 0; bn<=biasnums.length;bn++){
      for(let bn2 = 0; bn2<=biasnums.length;bn2++){
        if (Rarray[r]===biasnums[bn2]){
          biasArray[r] = 4
        } 
      }
    }
    }
    
    
      // For each number in biasnums
      let stop = false // Stop var
      let count = 0 // number of times inner loop's if was true
      let found1 = 0
      let num1 = 0
      let found2 = 0
      let num2 = 0
      
     outerloop: for(let bn = 0; bn<Rarray.length;bn++){
      if (stop){break;}
     innerloop:     for(let b2n = 0; b2n<biasnums.length;b2n++){
    
    if(Rarray[bn]==biasnums[b2n]){
    count++
     // console.log(`Tree: ${biasnums[b2n]}`)
    //console.log(`Found @ ${Rarray.indexOf(biasnums[b2n]) + 1}`)
      if (count == 1){
        found1 = Rarray.indexOf(biasnums[b2n]) + 1
        num1 = biasnums[b2n]
      } else {
        found2 = Rarray.indexOf(biasnums[b2n]) + 1
        num2 = biasnums[b2n]
    }
      if (count == 2){ stop = true; break;}
    
      if (stop){break;}
        
      break innerloop;
      break outerloop;
       
    
    }
    
          }
      }
    
    
    
    
    // 3 numbers 1 ahead, and 1 back, and the number itself.
    
    
    
    var randomnum2 = Math.floor(Math.random()*(num1*2+num2*2))
    
    //console.log(`Rarray: ${Rarray}`)
    //console.log(`\nBiasArray: ${biasArray}`)
    
    //console.log(`\n 1: F:${found1}; N: ${num1}`)
    //console.log(`\n 2: F:${found2}; N: ${num2}`)
    
    let finalResult = Math.floor(((num1+num2+(randomnum2/2))))
    
    if(finalResult >= 36){
      finalResult = Math.floor((randomnum2/2));
    }
    console.log(numList)
      checkWin(finalResult)
      console.log(`Bias Spin Result: ${finalResult}`)
      return finalResult;
    }
    
    
    function avgSpin(){
      let avgArray = []
      for(let i = 0; i<=36;i++){
        avgArray.push(Math.floor(Math.random()*37))
      }
      
      let total = 0
      let finalAVG = 0
      for (let num = 0; num < avgArray.length; num++){
        total = total + avgArray[num]
      }
      
    finalAVG = Math.floor((total/avgArray.length))
    checkWin(finalAVG)
    console.log(`Avg Spin Result: ${finalAVG}`)
      return finalAVG
    }



async function animateDisplay(){
  const display = document.querySelector("#spinDisplayTXT");

for (let i = 0; i < 8; i++) {
  let spinCount = 100 + (i*55)
  var SPINNUMANDIS = Math.floor(Math.random()*37)
  display.textContent = `${SPINNUMANDIS}`;
  if (greenNums.includes(SPINNUMANDIS)){
    display.style.setProperty("fill", "#6B705C", "important");
  } else {
    display.style.setProperty("fill", "#CB997E", "important");
  }
  await wait(1000)
}
}
async function checkWin(num){
  const display = document.getElementById("spinDisplayTXT");
await animateDisplay()
display.textContent = `${num}`;
if (greenNums.includes(num)){
  display.style.setProperty("fill", "#6B705C", "important");
} else {
  display.style.setProperty("fill", "#CB997E", "important");
}

  if (numList.includes(num)){
    let tickets = exportTL[num]
 let multiplier = Math.floor(Math.random()*3)
 let AM = (tickets * (1+multiplier))
 let randomLoss = (Math.floor(Math.random()*450))
 let win = Math.abs(Math.floor(AM-randomLoss))
 if (tickets == 0){ win = 0}
 console.log(``)
 addWin(win)
document.querySelector("#outerDisplay").setAttribute("fill","#6B705C")
 await wait(2000)
    console.log(`You won ${win} credits!`)
    document.querySelector("#outerDisplay").setAttribute("fill","#FFE8D6")
    alert(`You won ${win} credits!`)
  
}
clearLists()
}

function addWin (credits){
let creditsBTN = document.getElementById(`creditsBTN`)
let newCredits = parseInt(creditsBTN.dataset.credits) + credits
creditsBTN.dataset.credits = parseInt(creditsBTN.dataset.credits) + credits
creditsBTN.innerHTML = `<strong>${newCredits}</strong> credits`
}

    
    //console.log(`Reg Spin Result: ${regSpin()}`) // Reg Spin
      //console.log(`avgSpin:${avgSpin()}`) // Avg Spin
    //console.log(`Bias Spin Result: ${biasSpin()}`) // Bias Spin

   
