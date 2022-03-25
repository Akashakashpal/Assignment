var tableData = [{
        'first_name': 'Russell',
        'last_name': 'Wilson',
        'rank': '1',
    },
    {
        'first_name': 'Matt',
        'last_name': 'Hasselbeck',
        'rank': '2',
    },
    {
        'first_name': 'Jim',
        'last_name': 'Zorn',
        'rank': '3',
    },
    {
        'first_name': 'Brady',
        'last_name': 'Quinn',
        'rank': '4',
    },
    {
        'first_name': 'Charly',
        'last_name': 'Whitehurst',
        'rank': '5',
    },
    {
        'first_name': 'Duane',
        'last_name': 'Devine',
        'rank': '6',
    },
    {
        'first_name': 'Tom',
        'last_name': 'Brady',
        'rank': '7',
    },
    {
        'first_name': 'Arron',
        'last_name': 'Rogers',
        'rank': '8',
    },
    {
        'first_name': 'Patrick',
        'last_name': 'Mahoms',
        'rank': '9',
    },
    {
        'first_name': 'Gardner',
        'last_name': 'Minshew',
        'rank': '10',
    },
    {
        'first_name': 'Andrew',
        'last_name': 'Luck',
        'rank': '11',
    },
    {
        'first_name': 'Josh',
        'last_name': 'Gordon',
        'rank': '12',
    },
    {
        'first_name': 'Drew',
        'last_name': 'Brees',
        'rank': '13',
    },
    {
        'first_name': 'Cam',
        'last_name': 'Newton',
        'rank': '14',
    },
    {
        'first_name': 'Joe',
        'last_name': 'Montana',
        'rank': '15',
    },
    {
        'first_name': 'Steve',
        'last_name': 'Young',
        'rank': '16',
    },
    {
        'first_name': 'Dan',
        'last_name': 'Jones',
        'rank': '17',
    },
    {
        'first_name': 'Eli',
        'last_name': 'Manning',
        'rank': '18',
    },
    {
        'first_name': 'Marus',
        'last_name': 'Marriota',
        'rank': '19',
    },
    {
        'first_name': 'Ryan',
        'last_name': 'Fitzpatrick',
        'rank': '21',
    },
    {
        'first_name': 'Chad',
        'last_name': 'Pennington',
        'rank': '21',
    },
    {
        'first_name': 'John',
        'last_name': 'Doe',
        'rank': '22',
    },
    {
        'first_name': 'Russell',
        'last_name': 'Wilson',
        'rank': '21',
    },
    {
        'first_name': 'Matt',
        'last_name': 'Hasselbeck',
        'rank': '22',
    },
    {
        'first_name': 'Jim',
        'last_name': 'Zorn',
        'rank': '23',
    },
    {
        'first_name': 'Brady',
        'last_name': 'Quinn',
        'rank': '24',
    },
    {
        'first_name': 'Charly',
        'last_name': 'Whitehurst',
        'rank': '25',
    },
    {
        'first_name': 'Duane',
        'last_name': 'Devine',
        'rank': '26',
    },
    {
        'first_name': 'Tom',
        'last_name': 'Brady',
        'rank': '27',
    },
    {
        'first_name': 'Arron',
        'last_name': 'Rogers',
        'rank': '28',
    },
    {
        'first_name': 'Patrick',
        'last_name': 'Mahoms',
        'rank': '29',
    },
    {
        'first_name': 'Gardner',
        'last_name': 'Minshew',
        'rank': '30',
    },
    {
        'first_name': 'Andrew',
        'last_name': 'Luck',
        'rank': '31',
    },
    {
        'first_name': 'Josh',
        'last_name': 'Gordon',
        'rank': '32',
    },
    {
        'first_name': 'Drew',
        'last_name': 'Brees',
        'rank': '33',
    },
    {
        'first_name': 'Cam',
        'last_name': 'Newton',
        'rank': '34',
    },
    {
        'first_name': 'Joe',
        'last_name': 'Montana',
        'rank': '35',
    },
    {
        'first_name': 'Steve',
        'last_name': 'Young',
        'rank': '36',
    },
    {
        'first_name': 'Dan',
        'last_name': 'Jones',
        'rank': '37',
    },
    {
        'first_name': 'Eli',
        'last_name': 'Manning',
        'rank': '38',
    },
    {
        'first_name': 'Marus',
        'last_name': 'Marriota',
        'rank': '39',
    },
    {
        'first_name': 'Ryan',
        'last_name': 'Fitzpatrick',
        'rank': '40',
    }
]

let start = 0

let e = document.getElementById("perPageContent");
let value = Number(e.options[e.selectedIndex].value);

let perPagecontent = value
let end = perPagecontent
count = 1


function display(start,end){
    document.getElementById("table-body").innerHTML=''
    if(count==1){
        document.getElementById("prev").style.visibility = "hidden"
    }
    for(let i=start; i<end; i++){
        let tr = document.createElement('tr')
        let element = `<td>${tableData[i].first_name}</td><td>${tableData[i].last_name}</td><td>${tableData[i].rank}</td>`
        tr.innerHTML = element
        document.getElementById("table-body").append(tr)
    }
}

display(start,end)

// next section
document.getElementById("next").addEventListener("click",()=>{
    document.getElementById("table-body").innerHTML = ''

    start += perPagecontent
    end += perPagecontent
    if(end > tableData.length){
        end = tableData.length
    }
    display(start,end)

    if(end >= tableData.length){
        document.getElementById('next').style.visibility='hidden'; 
    }
    document.getElementById("prev").style.visibility = "visible"
    count += 1
    document.getElementById("PageNo").innerText = count
})

// prev section
document.getElementById("prev").addEventListener("click",()=>{
    document.getElementById("table-body").innerHTML = ''
    start -= perPagecontent
    if(count-1 == 1){
        document.getElementById("prev").style.visibility = "hidden"
    }
    document.getElementById('next').style.visibility='visible';
    if(tableData.length == end){
        end = (count-1)*perPagecontent
    }else{
        end -= perPagecontent
    }
    
    display(start,end)
    
    count -= 1
    document.getElementById("PageNo").innerText = count
})

// Start Page
document.getElementById("start").addEventListener("click",()=>{
    display(0,perPagecontent)
})

//end page
document.getElementById("end").addEventListener("click",()=>{
    display((Math.floor(tableData.length/perPagecontent))*perPagecontent,tableData.length)
})


