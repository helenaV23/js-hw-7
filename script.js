const sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

const summerSports = sports.slice(5);
const winterSports = sports.slice(0, 5);
const fruits = winterSports.splice(2, 1).concat(summerSports.splice(2, 2));

showList(winterSports, "Winter Sports");
showList(summerSports, "Summer Sports");
showList(fruits, "Fruits");

function showList(arr, title) {
    console.log(`*** ${title} ***`);

    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i].join(": ")}`);
    }

    console.log("");
}
