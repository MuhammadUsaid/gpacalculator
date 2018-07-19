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
    grades: ["A+","A","A-","B+","B","B-","C+","C","C-","F"],
    credits: [1,2,3,4],
    //Method To Add Another Row/Course
    add: ()=>{
        let tbody = document.getElementById('tbody')
        let tr = document.createElement('tr')
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
                    select = createOptions(semester.grades)
                    select.className = "grades"
                    td.appendChild(select)
                    break
                case 2:
                    select = createOptions(semester.credits)
                    select.className = "credits"
                    td.appendChild(select)
                    break
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    },
    remove: ()=>{

    },
    calculate: ()=>{

    }
}