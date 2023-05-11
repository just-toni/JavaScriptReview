const student = {
    firstName: 'Hyuneaq',
    lastName: 'Mashdegdf',
    age: 23,
    skills: ['Photography', 'Volleyball', 'Springboot', 'Django', 'Java', 'React', 'Flutter'],
    country: 'USA',
    city: 'Los Angeles'
}

localStorage.setItem("student", JSON.stringify(student));