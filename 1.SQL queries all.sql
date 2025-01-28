
create database example;
use example;

create table students (
    stud_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    date_of_birth date,
    email varchar(50),
    course varchar(50)
);

delimiter $$
create procedure inserting(
    in p_stud_id int,
    in p_first_name varchar(50),
    in p_last_name varchar(50),
    in p_date_of_birth date,
    in p_email varchar(50),
    in p_course varchar(50)
)
begin
    insert into students(stud_id, first_name, last_name, date_of_birth, email, course)
    values (p_stud_id, p_first_name, p_last_name, p_date_of_birth, p_email, p_course);
end $$
delimiter ;


-- Get All Students Procedure
delimiter $$
create procedure get_all_students()
begin
    select * from students;
end $$
delimiter ;

-- Get Students By Course here created an procedure
delimiter $$
create procedure get_students_by_course(in p_course varchar(50))
begin
    select * from students where course = p_course;
end $$
delimiter ;


-- Update student procedure
delimiter $$
create procedure update_student(
    in p_stud_id int,
    in p_new_course varchar(50),
    in p_new_email varchar(50)
)
begin
    update students
    set course = p_new_course, email = p_new_email
    where stud_id = p_stud_id;
end $$
delimiter ;

-- Delete Student Procedure
delimiter $$
create procedure delete_student(
    in p_stud_id int
)
begin
    delete from students
    where stud_id = p_stud_id;
end $$
delimiter ;

-- calling the procedures

-- 1. Insert new students
call inserting(1, 'rohan', 'kambale', '2003-11-12', 'rk@gmail.com', 'science');
call inserting(2, 'azhar', 'pathan', '2003-11-27', 'ap@gmail.com', 'geography');
call inserting(3, 'bhavesh', 'barhate', '2003-12-12', 'bb@gmail.com', 'electrical');
call inserting(4, 'azim', 'shaikh', '2003-11-12', 'as@gmail.com', 'chemistry');

-- 2. Inserting new student
call inserting(5, 'jay', 'surwase', '2002-07-23', 'jay@gmail.com', 'biology');

-- 3. Get all students
call get_all_students();

-- 4. Get students by course (e.g., 'science')
call get_students_by_course('science');

-- 5. Update a student's course and email (e.g., stud_id = 2)
call update_student(2, 'history', 'azhar.pathan@newemail.com');

-- 6. Delete a student by stud_id (e.g., stud_id = 3)
call delete_student(3);

-- Drop the database if needed
DROP DATABASE IF EXISTS example;
