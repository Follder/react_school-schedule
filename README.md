# School Schedule"

## Demo
For Demo this project you can use [DEMO LINK](https://test.podarun.com.ua/)


## About project

The project has the form of adding lessons and the day of the week when it will take place. The project also contains a table that allows you to add a teacher for each subject. If we do not have any subject, the table will not be displayed.

Also, the project contains a database with two tables "subjects" and "teachers", and a third summary table "subject_teacher" for storing information about which teacher teaches this subject.

The table "subjects" is filled by the user by filling out the form. The days of the week are represented in the table as numeric identifiers ('01', '02', ... '07') to avoid binding to a specific language.

The "teachers" table is filled with seed.

The "subject_teacher" table stores the identifier of the subject and the identifier of the teacher who teaches it. The table always contains all fields of available items. And if no teacher has been added to any subject, "null" will be stored instead of the ID of this teacher. This was done so that in the case of expanding the functionality to a form that requests information about a specific subject and its teacher, we could get valid data.

The project has a nice design and validation.

## Project timeline

This test project was created to demonstrate and improve skills, including:
- File composition
- Work with the database
- RESTful API

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6)
- React
- PHP
- MySQL
- Git
- Github

## Contacts

Dmytro Koriahin - [@Dmytro Koriahin](https://github.com/Follder) - [dmytro.koriahin@gmail.com](mailto:dmytro.koriahin@gmail.com)

Project Link: https://github.com/Follder/react_school-schedule