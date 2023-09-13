select e.name from Employee as e inner join Employee as e2 on e.id = e2.managerId
group by e2.managerId having count(e2.id) >= 5;
