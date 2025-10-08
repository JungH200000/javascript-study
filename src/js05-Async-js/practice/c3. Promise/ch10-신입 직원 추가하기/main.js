import { getInterviews, getEmployees } from './asyncFunction.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

const employeesArr = await getEmployees();
const interviewsArr = await getInterviews();

/* for (let i = 0; i < interviewsArr.length; i++) {
  const interview = interviewsArr[i];
  const interviewResult = interview.result;
  // console.log(interview);
  // console.log(interviewResult);

  if (interviewResult === 'pass') {
    addNewEmployee(employeesArr, interview);
  }
} */

interviewsArr.forEach((interview) => {
  const interviewResult = interview.result;

  if (interviewResult === 'pass') {
    addNewEmployee(employeesArr, interview);
  }
});

console.log(employeesArr);
