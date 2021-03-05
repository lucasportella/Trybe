function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  function createDaysOfTheMonth() {
  let daysUl = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let specificDay = document.createElement('li');
    specificDay.innerHTML = dezDaysList[i];
    specificDay.className += "day";
    if (specificDay.innerHTML === "25" || specificDay.innerHTML === '24' || specificDay.innerHTML === '31') {
      specificDay.className += "holiday";
    }
    if (specificDay.innerHTML === '4' || specificDay.innerHTML === '11' || specificDay.innerHTML === '18' || specificDay.innerHTML === '25') {
      specificDay.className += "friday";
    }
    daysUl.appendChild(specificDay);
  }
}
createDaysOfTheMonth()