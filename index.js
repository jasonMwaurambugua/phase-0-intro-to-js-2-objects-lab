// Objects Lab
//jason


const driver = {
    name: "Sam",
    streetAddress: "5 Main Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) 
  function updateDriverWithKeyAndValue(driver, key, value) {
    
    
    return Object.assign({}, employee, { [key]: value });
    return Object.assign({}, driver, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) 
    employee[key] = value;
  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return employee;
    return driver;
  }
  
  function deleteFromEmployeeByKey(employee, key) 
  function deleteFromDriverByKey(driver, key) {

    const Obj = Object.assign({}, employee);
    const newObj = Object.assign({}, driver);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  function destructivelyDeleteFromDriverByKey(driver, key) 
    delete driver[key];
  
    return employee;
    return driver;
     }
