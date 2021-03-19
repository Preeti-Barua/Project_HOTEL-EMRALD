import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:8888/api/v1/employees/";
class  EmployeeService 
{

    // getchecking()
    // {
    //     return axios.get(EMPLOYEE_API_BASE_URL+'a');
    // }
     getEmployees()
     {
         return axios.get(EMPLOYEE_API_BASE_URL+'ms');
     }
     createEmployee(employee)
     {
        console.log('employee =>' +JSON.stringify(employee));
         return axios.post(EMPLOYEE_API_BASE_URL+'add',employee);
     }

     getEmployeesById(employeeId)
     {
         return axios.get(EMPLOYEE_API_BASE_URL+'ss'+'/'+employeeId);
     }

     updateEmployee(emp){
        return axios.post(EMPLOYEE_API_BASE_URL+'update',emp);
     }
}
export default new EmployeeService()