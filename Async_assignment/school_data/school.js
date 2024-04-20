const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


  let countCalculation = (school)=>{
    let {departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount },
    },
  } = school
   
  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount
  };
};
  console.log( countCalculation(school))

  let findTopStudent = (school,subject) =>{

    let {students} = school

let studentScore = students.filter(student => subject in student.scores);

// Find the student with the highest score in the specified subject
let topStudent = studentScore.reduce((prev, curr) => {
    return curr.scores[subject] > prev.scores[subject] ? curr : prev;
});

return topStudent;

  }
  console.log(findTopStudent(school,'math'))

let addNewDept = (school,newDept)=>{
    let updatedSchool = {...school}

    updatedSchool.departments = {...updatedSchool.departments, ...newDept}

    return updatedSchool;
}
const newDepartment = {
    art: { teachers: 2, students: 50 }
};
console.log(addNewDept(school, newDepartment));

const highestStudentCountDepartment = (school) => {
    let maxStudents = 0;
    let departmentWithMaxStudents = '';
    for (const department in school.departments) {
        const studentsCount = school.departments[department].students;
        
        if (studentsCount > maxStudents) {
            maxStudents = studentsCount;
            departmentWithMaxStudents = department;
        }
    }

    return departmentWithMaxStudents;
};


console.log(highestStudentCountDepartment(school)); 

const generateGreeting = (name, language = 'English') => {
    const greetings = {
        English: `Hello, ${name}!`,
        Spanish: `¡Hola, ${name}!`,
        French: `Bonjour, ${name}!`
    };

    return greetings[language] || `Hello, ${name}!`; 
};

console.log(generateGreeting("Alice")); 
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French")); 
