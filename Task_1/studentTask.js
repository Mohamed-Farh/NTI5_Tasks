let showHideBtn = document.querySelector('#showhide')
let studentsTable = document.querySelector('#studentsTable')
    //random Values We Input Them By
let students = [
    {name:'Mohamed', age:25, level:'One', degree:'86', grade:'A'},
    {name:'Ali', age:35, level:'Two', degree:'66', grade:'C'},
]
let studentForm = document.querySelector('#addStudent')
let tableHeaders= ['id','name', 'age','level','degree', 'grade','actions']
let actions = [
    {txt:'delete', classes:'btn btn-danger m-1'},
    {txt:'edit', classes:'btn btn-info m-1'},
]
showHideBtn.addEventListener('click', function(e){
    this.innerText=="show form"? this.innerText="hide form" : this.innerText="show form";
    studentForm.classList.toggle('d-none')
})
studentForm.addEventListener('submit',function(e){
    e.preventDefault()
    
        var getGrade=''
        if( this.elements.degree.value > 85) getGrade = 'A'
        else if( this.elements.degree.value > 75) getGrade = 'B'
        else if( this.elements.degree.value > 65) getGrade = 'C'
        else if( this.elements.degree.value > 50) getGrade = 'D'
        else getGrade = 'F'

    let student = {
        name: this.elements.name.value,
        age: this.elements.age.value,
        level: this.elements.level.value,
        degree: this.elements.degree.value,
        grade: getGrade
    }
    students.push(student)
    this.reset()
    this.classList.toggle('d-none')
    showHideBtn.innerText="show form"
    showStudents()
})
let addElement = function(eleType, parent, txt='', classes=''){
    ele = document.createElement(eleType)
    if(txt!='') ele.innerText = txt
    if(classes!='') ele.classList=classes
    parent.appendChild(ele)
    return ele
}
let showStudents = function(){
    studentsTable.innerText=''
    students.forEach((student, i)=>{
        tr = addElement('tr', studentsTable)
        tableHeaders.forEach(element=>{ 
            if(element=="id") txt = i+1
            else if(element=='actions') txt = ''
            else txt=student[element]
            td = addElement('td', tr, txt)
        })
        actions.forEach(action=>{
            btn = addElement('button', td, action.txt, action.classes)
            btn.addEventListener('click',function(e){
                if(action.txt=='edit') editStudent(i)
                else if(action.txt=='delete') deleteStudent(i)

            })
        })
    })
}
function editStudent(index){
    let name= prompt('Enter Student Name')
    students[index].name = name
    let age= prompt('Enter Student Age')
    students[index].age = age
    let level= prompt('Enter Student Level')
    students[index].level = level
    let degree= prompt('Enter Student Degree')
    students[index].degree = degree
}
function deleteStudent(index){
    students.splice(index,1)
    showStudents()
}

showStudents()