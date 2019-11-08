## Project for BuildOps Interview

### Information

This is a react-native project for the BuildOps Interview. To run the project, you must have access the `aws-exports.js`. This file is not included in the repository as it includes the API key.

### Running the Program

After getting access to the `aws-exports.js` file, you can run this project in three easy steps:
```
# 1) Install the Node Modules
yarn install

# 2) Install the Podfiles
cd ios; pod install

# 3) Run!
cd ../; react-native run-ios
```

### Using the Program

This is a simple employee management application. Upon launching the application, you will be greeted with an empty screen (or pre-populated screen). Clicking the add button on the upper right will allow you to create a new Employee with an ID and name. Once the employee is created, it will appear on the home page. Clicking on the employee cell will take you to another screen where you can view/add/delete details.