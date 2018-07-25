//Helper Function To Deal with DOM options and Return Select element with options of the iterable parameter
function createOptions(array){
    let select = document.createElement('select')
    for(i=0;i < array.length; i++){
        let option = document.createElement('option')
        let text = document.createTextNode(array[i])
        option.appendChild(text)
        select.appendChild(option)
    }
    return select
}


let semester = {
    gradeValues: ["A+","A","A-","B+","B","B-","C+","C","C-","F"],
    creditValues: [1,2,3,4],
    gpaValues : {"A+":4,"A":4,"A-":3.67,"B+":3.33,"B":3,"B-":2.67,"C+":2.33,
    "C":2,"C-":1.67,"F":0},
    //Method To Add Another Row/Course
    add: ()=>{
        let tbody = document.getElementById('tbody')
        let tr = document.createElement('tr')
        tr.className = "rows"
        for(var i = 0;i < 3; i++){
            let td = document.createElement('td')
            let input = document.createElement('input')
            let select
            switch(i){
                case 0:
                    input.className = "courses"
                    td.appendChild(input)
                    break
                case 1:
                    select = createOptions(semester.gradeValues)
                    select.className = "grades"
                    td.appendChild(select)
                    break
                case 2:
                    select = createOptions(semester.creditValues)
                    select.className = "credits"
                    td.appendChild(select)
                    break
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        document.getElementById('gpaContainer').innerHTML = ""
        document.getElementById('gpaContainer').className = ""
    },
    //Method To remove the last row
    remove: ()=>{
        let rows = document.getElementsByClassName('rows')
        if(rows.length > 1){
            rows[rows.length-1].remove()
        }
        document.getElementById('gpaContainer').innerHTML = ""
        document.getElementById('gpaContainer').className = ""
    },
    //Method To calculate GPA
    calculate: ()=>{
        let credits = document.getElementsByClassName('credits')
        let grades = document.getElementsByClassName('grades')
        let gradePoints = 0
        let sumOfCredits = 0
        for(var i = 0; i < grades.length;i++){
            gradePoints += semester.gpaValues[grades[i].value]*credits[i].value
            sumOfCredits += parseInt(credits[i].value)
        }
        let gpa = (gradePoints/sumOfCredits).toFixed(2)
        document.getElementById('gpaContainer').innerHTML = "Your Gpa: " + gpa
        document.getElementById('gpaContainer').className = "gpaContainer"
    }
}