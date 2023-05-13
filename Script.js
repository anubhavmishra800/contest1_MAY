let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function (student) {
        if (student.marks > 50) {
          console.log(student);
        }
      });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function (student) {
        if (student.marks > 50) {
          console.log(student);
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    let to_be_added_student={ id:4,name:"susan",age:"20",marks:45 };
    arr.push(to_be_added_student);
  console.log(arr);
}
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let students_failed=arr.filter((student)=>student.marks<50)
       console.log(students_failed);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr= [{ id: 5, name: "jay", age: "24",marks:99 },
     { id: 6, name: "owaisi", age: "15",marks:33 },
    { id: 7, name: "abdul", age: "25",marks:52 }]
    let concatArr = arr.concat(newArr);
    console.log(concatArr);
  }