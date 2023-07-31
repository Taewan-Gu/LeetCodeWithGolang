# Write your MySQL query statement below
select name as Employee
from Employee as a1
where salary > (select salary from Employee as a2 where a1.managerId = a2.id)
