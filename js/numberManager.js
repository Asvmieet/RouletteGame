let numList = []
let ticketList = new Array(37).fill(0)
let haverun = false;
let evenNums = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]
let oddNums = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]
let pinkNums = [1, 3, 5, 7, 9,12, 14, 16, 18,19, 21, 23, 25, 27,30, 32, 34, 36]
let greenNums = [2, 4, 6, 8, 10,11, 13, 15, 17,20, 22, 24, 26, 28,29, 31, 33, 35]

var exportNL = numList
var exportTL = ticketList

 console.log(`ticketList: ${ticketList}`)
 document.getElementById("creditsBTN").dataset.credits = 100

 function removeCredits(tickets){
  let ticketsabs = Math.abs(tickets)
  let creditsBTN = document.getElementById(`creditsBTN`)
  let newCredits = parseInt(creditsBTN.dataset.credits) - ticketsabs
  creditsBTN.dataset.credits = parseInt(creditsBTN.dataset.credits) - ticketsabs
  creditsBTN.innerHTML = `<strong>${newCredits}</strong> credits`
}

 function canRemove(tickets){
  let ticketsabs = Math.abs(tickets)

  console.log(`Checking if we can remove ${tickets} tickets`)
  let creditsBTN = document.getElementById(`creditsBTN`)
  let newCredits = parseInt(creditsBTN.dataset.credits) - ticketsabs
  console.log(`Checking Creds`)
  if (newCredits < 0){
    alert("Thou hast not enough credytes to place this amount. Kindly gather more before thou proceedest. (You are broke, no more credits. (Try a lower amount or restart)");
    console.log(newCredits)
    return false
  } else {
  return true
  }
}



 function addType(type, tickets){
  if (!isNaN(tickets) && canRemove(tickets)){
    removeCredits(tickets)
tickets = Math.abs(tickets)
if (type == "even"){
  let evenTickets = Math.floor(Math.round(tickets / 18))
    for (let i = 0; i < evenNums.length; i++){
        addCNum(evenNums[i], evenTickets)
    }
    } else if (type == "odd"){
      let oddTickets = Math.floor(Math.round(tickets / 18))

        for (let i = 0; i < oddNums.length; i++){
            addSNum(oddNums[i], oddTickets)
        }

    } else if (type == "pink"){
      let pinkTickets = Math.floor(Math.round(tickets / pinkNums.length))

      for (let i = 0; i < pinkNums.length; i++){
        addSNum(pinkNums[i], pinkTickets)
    }

    } else if (type == "green"){
      let greenTickets = Math.floor(Math.round(tickets / greenNums.length))

        for (let i = 0; i < greenNums.length; i++){
            addSNum(greenNums[i], greenTickets)
        }

    }
  
 }
}




function addCredits(tickets){
  tickets = Math.abs(tickets)
  let creditsBTN = document.getElementById(`creditsBTN`)
  let newCredits = parseInt(creditsBTN.dataset.credits) + tickets
  creditsBTN.dataset.credits = parseInt(creditsBTN.dataset.credits) + tickets
  creditsBTN.innerHTML = `<strong>${newCredits}</strong> credits`
}

 function addCNum(num,tickets){
  tickets = Math.abs(tickets)

    if (!isNaN(tickets) && !isNaN(num)){
    let btn = document.createElement("button")
    btn.textContent = `${num} - ${tickets}`
    btn.style.backgroundColor = "#CB997E"
    btn.dataset.num = num
    btn.dataset.tickets = tickets
    btn.onclick = function(){removeCNum(this)}

    document.getElementById(`addBetNUM`).appendChild(btn)
    }
        }

        function removeCNum(btn){
           let index = numList.indexOf(parseInt(btn.dataset.num));
           let ticketsOnNum = parseInt(btn.dataset.tickets);
addCredits(ticketsOnNum)
            numList.splice(index, 1);
            ticketList[parseInt(btn.dataset.num)] = (ticketList[parseInt(btn.dataset.num)] - ticketsOnNum)
           btn.remove();  
        
 console.log(`numList: ${numList}`)
 console.log(`ticketList: ${ticketList}`)

                }

function addSNum(num,tickets){
  tickets = Math.abs(tickets)

  if (!isNaN(tickets) && !isNaN(num) && canRemove(tickets)){
    numList.push(num)
    ticketList[num] = ticketList[num] + tickets
    console.log(`numList: ${numList}`)
    console.log(`ticketList: ${ticketList}`)
    let btn = document.createElement("button")
    btn.textContent = `${num} - ${tickets}`
    btn.style.backgroundColor = "#CB997E"
    btn.dataset.num = num
    btn.dataset.tickets = tickets
    btn.onclick = function(){removeCNum(this)}
    removeCredits(tickets)

    document.getElementById(`addBetNUM`).appendChild(btn)
    }

}
function removeSNum(num){
  let index = numList.indexOf(parseInt(num));
  if (index > -1) { // If the index is -1, then the number is not in numList

    numList.splice(index, 1);
    ticketList[parseInt(num)] =  ticketList[parseInt(num)] -  ticketList[parseInt(num)]
  }

}

function orderedNum(start, end, tickets){
  tickets = Math.abs(tickets)

console.log(canRemove(tickets))
    if (!isNaN(tickets) && canRemove(tickets)){

    if (!haverun){
        console.log("Starting orderedNum")
    haverun = true
    removeCredits(tickets)
let TPNF = Math.round(tickets / (end - start + 1))
let ticketsPerNumber = Math.round(TPNF * 2) / 2

  for (let i = start; i <= end; i++){
    numList.push(i)
    ticketList[i] = ticketList[i] + ticketsPerNumber
    addCNum(i, ticketsPerNumber)
   // console.log(`Added ${i} to numList`)
  }
//  console.log(`Finished adding to numList`)

setTimeout(() => {
    haverun = false
    console.log(numList)

  }, 1000)
}
    }

}

function removeOrderedNum(start, end){
for (let n = start; n <= end; n++){
  if (numList.includes(n)){
    let index = numList.indexOf(n);
    numList.splice(index, 1);
    ticketList.splice(n, 1);
  }
}
console.log(numList)
}

function clearLists(){
    numList = []
    ticketList = new Array(37).fill(0)
    const CNdiv = document.getElementById("addBetNUM");
    const buttons = CNdiv.querySelectorAll("button");
    buttons.forEach(button => {
      button.remove();
    });
}



function getNumList(){
    return numList
    }

    function getTicketList(){
        return ticketList
    }

