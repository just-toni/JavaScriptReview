let h1 = document.createElement('h1');
h1.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span>${asabenehChallenges2020.challengeYear}</span>`;
h1.style.fontSize = '20px';
h1.style.fontWeight = 'lighter'
let outerDiv = document.querySelector('div');
outerDiv.appendChild(h1);
outerDiv.style.textAlign = 'center';
outerDiv.style.fontFamily = 'Trebuchet MS';
outerDiv.style.padding = '0 250px';
outerDiv.style.fontWeight = 'lighter';
let year = document.querySelector('span');
year.style.fontSize = '40px';
year.style.fontWeight = 'bold'
const colorSwitcherForYear = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let rgb = `rgb(${first}, ${second}, ${third})`;
    year.style.color = rgb;
}
setInterval(colorSwitcherForYear, 1000);

let h3_1 = document.createElement('h2');
h3_1.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;
h3_1.style.textDecoration = 'underline';
h3_1.style.fontWeight = 'lighter';
h3_1.style.fontSize = '15px'
let h3_2 = document.createElement('h3');
h3_2.style.width = "200px";
h3_2.style.margin = "0 auto";
h3_2.style.padding = '5px';
h3_2.style.fontSize = '15px';
const month = (number) => {
    if(number === 0){
        return 'January'
    }
    else if(number === 1){
        return 'February'
    }
    else if(number === 2){
        return 'March'
    }
    else if(number === 3){
        return 'April'
    }
    else if(number === 4){
        return 'May'
    }
    else if(number === 5){
        return 'June'
    }
    else if(number === 6){
        return 'July'
    }
    else if(number === 7){
        return 'August'
    }
    else if(number === 8){
        return 'September '
    }
    else if(number === 9){
        return 'October'
    }
    else if(number === 10){
        return 'November'
    }
    else return 'December'
}
const hours = (hour) => {
    let result = '0'
    if(hour < 10){
        return result + hour
    }
    else return hour;
}
const minutes = (minute) => {
    let result = '0'
    if(minute < 10){
        return result + minute
    }
    else return minute;
}
const seconds = (second) => {
    let result = '0'
    if(second < 10){
        return result + second
    }
    else return second;
}
h3_2.innerHTML = month(new Date().getMonth()) + " " + new Date().getDate() + ", " + new Date().getFullYear()
+ " " + hours(new Date().getHours()) + ":" + minutes(new Date().getMinutes()) + ":" + seconds(new Date().getSeconds());

const colorSwitcherForDate = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let rgb = `rgb(${first}, ${second}, ${third})`;
    h3_2.style.backgroundColor = rgb;
}
setInterval(colorSwitcherForDate, 1000);

outerDiv.appendChild(h3_1);
outerDiv.appendChild(h3_2);

let firstSection = document.createElement('section');
firstSection.setAttribute('id', 'challenges');
outerDiv.appendChild(firstSection);
let challengesUl = document.createElement('ul');
challengesUl.setAttribute('id','challengesList');
firstSection.appendChild(challengesUl);
challengesUl.style.listStyleType = 'none';

// 30 days python
let firstItem_1 = document.createElement('li');
let challengesUl_1 = document.createElement('section');
challengesUl_1.setAttribute('id', 'python')
challengesUl_1.style.display = 'flex';
challengesUl_1.style.flexDirection = 'row';
challengesUl_1.style.justifyContent = 'space-between';
challengesUl_1.style.backgroundColor = 'greenyellow';
challengesUl_1.style.padding = '20px';
challengesUl_1.style.margin = '5px';
challengesUl_1.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_1);
let firstItemLink = document.createElement('a');
firstItemLink.setAttribute('href', asabenehChallenges2020.challenges[0].githubUrl);
firstItemLink.setAttribute('id', 'firstItemLink');
firstItemLink.textContent = asabenehChallenges2020.challenges[0].name;
firstItem_1.appendChild(firstItemLink);
let firstItem_2 = document.createElement('details');
firstItem_2.setAttribute('class', 'topicsList');
let summary_1 = document.createElement('summary');
let title = asabenehChallenges2020.challenges[0].name.substring(10);
summary_1.textContent = title;
firstItem_2.appendChild(summary_1);
for (let index = 0; index < asabenehChallenges2020.challenges[0].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[0].topics;
    let firstItem_2Child = document.createElement('p');
    firstItem_2Child.innerHTML = element[index];
    firstItem_2.appendChild(firstItem_2Child);
}
let firstItem_3 = document.createElement('li');
firstItem_3.textContent = asabenehChallenges2020.challenges[0].status;
challengesUl_1.appendChild(firstItem_1);
challengesUl_1.appendChild(firstItem_2);
challengesUl_1.appendChild(firstItem_3);

// 30 day js
let secondItem_1 = document.createElement('li');
let challengesUl_2 = document.createElement('section');
challengesUl_2.setAttribute('id', 'javascript');
challengesUl_2.style.display = 'flex';
challengesUl_2.style.flexDirection = 'row';
challengesUl_2.style.flexWrap = 'wrap';
challengesUl_2.style.justifyContent = 'space-between';
challengesUl_2.style.backgroundColor = 'gold';
challengesUl_2.style.padding = '20px';
challengesUl_2.style.margin = '5px';
challengesUl_2.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_2);
let secondItemLink = document.createElement('a');
secondItemLink.setAttribute('href', asabenehChallenges2020.challenges[1].githubUrl);
secondItemLink.setAttribute('id', 'secondItemLink');
secondItemLink.textContent = asabenehChallenges2020.challenges[1].name;
secondItem_1.appendChild(secondItemLink);
let secondItem_2 = document.createElement('details');
secondItem_2.setAttribute('class', 'topicsList');
let summary_2 = document.createElement('summary');
let title2 = asabenehChallenges2020.challenges[1].name.substring(10);
summary_2.textContent = title2;
secondItem_2.appendChild(summary_2);
for (let index = 0; index < asabenehChallenges2020.challenges[1].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[1].topics;
    let secondItem_2Child = document.createElement('p');
    secondItem_2Child.innerHTML = element[index];
    secondItem_2.appendChild(secondItem_2Child);
}
let secondItem_3 = document.createElement('li');
secondItem_3.textContent = asabenehChallenges2020.challenges[1].status;
challengesUl_2.appendChild(secondItem_1);
challengesUl_2.appendChild(secondItem_2);
challengesUl_2.appendChild(secondItem_3);

// 30 day html & css
let thirdItem_1 = document.createElement('li');
let challengesUl_3 = document.createElement('section');
challengesUl_3.setAttribute('id', 'htmlcss');
challengesUl_3.style.display = 'flex';
challengesUl_3.style.flexDirection = 'row';
challengesUl_3.style.flexWrap = 'wrap';
challengesUl_3.style.justifyContent = 'space-between';
challengesUl_3.style.backgroundColor = 'coral';
challengesUl_3.style.padding = '20px';
challengesUl_3.style.margin = '5px';
challengesUl_3.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_3);
thirdItem_1.textContent = asabenehChallenges2020.challenges[2].name;
let thirdItem_2 = document.createElement('details');
thirdItem_2.setAttribute('class', 'topicsList');
let summary_3 = document.createElement('summary');
let title3 = asabenehChallenges2020.challenges[2].name.substring(10);
summary_3.textContent = title3;
thirdItem_2.appendChild(summary_3);
for (let index = 0; index < asabenehChallenges2020.challenges[2].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[2].topics;
    let thirdItem_2Child = document.createElement('p');
    thirdItem_2Child.innerHTML = element[index];
    thirdItem_2.appendChild(thirdItem_2Child);
}
let thirdItem_3 = document.createElement('li');
thirdItem_3.textContent = asabenehChallenges2020.challenges[2].status;
challengesUl_3.appendChild(thirdItem_1);
challengesUl_3.appendChild(thirdItem_2);
challengesUl_3.appendChild(thirdItem_3);

// 30 day react
let fourthItem1 = document.createElement('li');
let challengesUl_4 = document.createElement('section');
challengesUl_4.setAttribute('id', 'react');
challengesUl_4.style.display = 'flex';
challengesUl_4.style.flexDirection = 'row';
challengesUl_4.style.flexWrap = 'wrap';
challengesUl_4.style.justifyContent = 'space-between';
challengesUl_4.style.backgroundColor = 'coral';
challengesUl_4.style.padding = '20px';
challengesUl_4.style.margin = '5px';
challengesUl_4.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_4);
fourthItem1.textContent = asabenehChallenges2020.challenges[3].name;
let fourthItem2 = document.createElement('details');
fourthItem2.setAttribute('class', 'topicsList');
let summary_4 = document.createElement('summary');
let title4 = asabenehChallenges2020.challenges[3].name.substring(10);
summary_4.textContent = title4;
fourthItem2.appendChild(summary_4);
for (let index = 0; index < asabenehChallenges2020.challenges[3].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[3].topics;
    let fourthItem_2Child = document.createElement('p');
    fourthItem_2Child.innerHTML = element[index];
    fourthItem2.appendChild(fourthItem_2Child);
}
let fourthItem3 = document.createElement('li');
fourthItem3.textContent = asabenehChallenges2020.challenges[3].status;
challengesUl_4.appendChild(fourthItem1);
challengesUl_4.appendChild(fourthItem2);
challengesUl_4.appendChild(fourthItem3);

// 30 day react native
let fifthItem1 = document.createElement('li');
let challengesUl_5 = document.createElement('section');
challengesUl_5.setAttribute('id', 'reactnative');
challengesUl_5.style.display = 'flex';
challengesUl_5.style.flexDirection = 'row';
challengesUl_5.style.flexWrap = 'wrap';
challengesUl_5.style.justifyContent = 'space-between';
challengesUl_5.style.backgroundColor = 'coral';
challengesUl_5.style.padding = '20px';
challengesUl_5.style.margin = '5px';
challengesUl_5.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_5);
fifthItem1.textContent = asabenehChallenges2020.challenges[4].name;
let fifthItem2 = document.createElement('details');
fifthItem2.setAttribute('class', 'topicsList');
let summary_5 = document.createElement('summary');
let title5 = asabenehChallenges2020.challenges[4].name.substring(10);
summary_5.textContent = title5;
fifthItem2.appendChild(summary_5);
for (let index = 0; index < asabenehChallenges2020.challenges[4].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[4].topics;
    let fifthItem_2Child = document.createElement('p');
    fifthItem_2Child.innerHTML = element[index];
    fifthItem2.appendChild(fifthItem_2Child);
}
let fifthItem3 = document.createElement('li');
fifthItem3.textContent = asabenehChallenges2020.challenges[4].status;
challengesUl_5.appendChild(fifthItem1);
challengesUl_5.appendChild(fifthItem2);
challengesUl_5.appendChild(fifthItem3);

// 30 day full stack
let sixthItem1 = document.createElement('li');
let challengesUl_6 = document.createElement('section');
challengesUl_6.setAttribute('id', 'fullstack');
challengesUl_6.style.display = 'flex';
challengesUl_6.style.flexDirection = 'row';
challengesUl_6.style.flexWrap = 'wrap';
challengesUl_6.style.justifyContent = 'space-between';
challengesUl_6.style.backgroundColor = 'coral';
challengesUl_6.style.padding = '20px';
challengesUl_6.style.margin = '5px';
challengesUl_6.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_6);
sixthItem1.textContent = asabenehChallenges2020.challenges[5].name;
let sixthItem2 = document.createElement('details');
sixthItem2.setAttribute('class', 'topicsList');
let summary_6 = document.createElement('summary');
let title6 = asabenehChallenges2020.challenges[5].name.substring(10);
summary_6.textContent = title6;
sixthItem2.appendChild(summary_6);
for (let index = 0; index < asabenehChallenges2020.challenges[5].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[5].topics;
    let sixthItem_2Child = document.createElement('p');
    sixthItem_2Child.innerHTML = element[index];
    sixthItem2.appendChild(sixthItem_2Child);
}
let sixthItem3 = document.createElement('li');
sixthItem3.textContent = asabenehChallenges2020.challenges[5].status;
challengesUl_6.appendChild(sixthItem1);
challengesUl_6.appendChild(sixthItem2);
challengesUl_6.appendChild(sixthItem3);

// 30 day data analysis
let seventhItem1 = document.createElement('li');
let challengesUl_7 = document.createElement('section');
challengesUl_7.setAttribute('id', 'dataAnalysis');
challengesUl_7.style.display = 'flex';
challengesUl_7.style.flexDirection = 'row';
challengesUl_7.style.flexWrap = 'wrap';
challengesUl_7.style.justifyContent = 'space-between';
challengesUl_7.style.backgroundColor = 'coral';
challengesUl_7.style.padding = '20px';
challengesUl_7.style.margin = '5px';
challengesUl_7.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_7);
seventhItem1.textContent = asabenehChallenges2020.challenges[6].name;
let seventhItem2 = document.createElement('details');
seventhItem2.setAttribute('class', 'topicsList');
let summary_7 = document.createElement('summary');
let title7 = asabenehChallenges2020.challenges[6].name.substring(10);
summary_7.textContent = title7;
seventhItem2.appendChild(summary_7);
for (let index = 0; index < asabenehChallenges2020.challenges[6].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[6].topics;
    let seventhItem_2Child = document.createElement('p');
    seventhItem_2Child.innerHTML = element[index];
    seventhItem2.appendChild(seventhItem_2Child);
}
let seventhItem3 = document.createElement('li');
seventhItem3.textContent = asabenehChallenges2020.challenges[6].status;
challengesUl_7.appendChild(seventhItem1);
challengesUl_7.appendChild(seventhItem2);
challengesUl_7.appendChild(seventhItem3);

// 30 day machine learning
let eightItem1 = document.createElement('li');
let challengesUl_8 = document.createElement('section');
challengesUl_8.setAttribute('id', 'machinelearning');
challengesUl_8.style.display = 'flex';
challengesUl_8.style.flexDirection = 'row';
challengesUl_8.style.flexWrap = 'wrap';
challengesUl_8.style.justifyContent = 'space-between';
challengesUl_8.style.backgroundColor = 'coral';
challengesUl_8.style.padding = '20px';
challengesUl_8.style.margin = '5px';
challengesUl_8.style.textAlign = 'left';
challengesUl.appendChild(challengesUl_8);
eightItem1.textContent = asabenehChallenges2020.challenges[7].name;
let eightItem2 = document.createElement('details');
eightItem2.setAttribute('class', 'topicsList');
let summary_8 = document.createElement('summary');
let title8 = asabenehChallenges2020.challenges[7].name.substring(10);
summary_8.textContent = title8;
eightItem2.appendChild(summary_8);
for (let index = 0; index < asabenehChallenges2020.challenges[7].topics.length; index++) {
    const element = asabenehChallenges2020.challenges[7].topics;
    let eighthItem_2Child = document.createElement('p');
    eighthItem_2Child.innerHTML = element[index];
    eightItem2.appendChild(eighthItem_2Child);
}
let eightItem3 = document.createElement('li');
eightItem3.textContent = asabenehChallenges2020.challenges[7].status;
challengesUl_8.appendChild(eightItem1);
challengesUl_8.appendChild(eightItem2);
challengesUl_8.appendChild(eightItem3);

let secondSection = document.createElement('section');
secondSection.setAttribute('id', 'secondSection');
outerDiv.appendChild(secondSection);
let author = document.createElement('h2');
author.textContent = asabenehChallenges2020.author.firstName + " " + asabenehChallenges2020.author.lastName;
secondSection.appendChild(author); 
author.style.fontWeight = 'lighter';
let icons = document.createElement('ul');
icons.style.listStyleType = 'none';
icons.style.display = 'flex';
icons.style.justifyContent = 'center';
icons.style.width = '100px';
icons.style.marginLeft = '280px';
icons.setAttribute('id', 'iconsList');
let iconItem1 = document.createElement('li');
let iconItem1Link = document.createElement('a');
iconItem1Link.setAttribute('href', asabenehChallenges2020.author.socialLinks[0].url);
let iconItem1Image = document.createElement('img');
let source1 = "/30DaysOfJavaScript/DayTwentyTwo/linkedInlogo.png"
iconItem1Image.setAttribute('src', source1);
iconItem1Image.setAttribute('alt', asabenehChallenges2020.author.socialLinks[0].social);
iconItem1Image.style.width = '48px';
iconItem1Image.style.marginTop = '-10px';
iconItem1Link.appendChild(iconItem1Image);
iconItem1.appendChild(iconItem1Link);
icons.appendChild(iconItem1);

// twitter icon
let iconItem2 = document.createElement('li');
let iconItem2Link = document.createElement('a');
iconItem2Link.setAttribute('href', asabenehChallenges2020.author.socialLinks[1].url);
let iconItem2Image = document.createElement('img');
let source2 = "/30DaysOfJavaScript/DayTwentyTwo/twitterlogo.png"
iconItem2Image.setAttribute('src', source2);
iconItem2Image.setAttribute('alt', asabenehChallenges2020.author.socialLinks[1].social);
iconItem2Image.style.width = '30px';
// iconItem2Image.style.height = '30px';
iconItem2.style.marginRight = '5px';
iconItem2Link.appendChild(iconItem2Image);
iconItem2.appendChild(iconItem2Link);
icons.appendChild(iconItem2);

// github icon
let iconItem3 = document.createElement('li');
let iconItem3Link = document.createElement('a');
iconItem3Link.setAttribute('href', asabenehChallenges2020.author.socialLinks[2].url);
let iconItem3Image = document.createElement('img');
let source3 = "/30DaysOfJavaScript/DayTwentyTwo/githubLogo.png"
iconItem3Image.setAttribute('src', source3);
iconItem3Image.setAttribute('alt', asabenehChallenges2020.author.socialLinks[2].social);
iconItem3Image.style.width = '30px';
iconItem3Link.appendChild(iconItem3Image);
iconItem3.appendChild(iconItem3Link);
icons.appendChild(iconItem3);

secondSection.appendChild(icons);

let bio = document.createElement('p');
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.fontWeight = 'lighter';
bio.style.margin = '0 60px';
secondSection.appendChild(bio);

let authorsInfo = document.createElement('section');
let titlesList = document.createElement('ul');
let titlesTitle = document.createElement('h6');
titlesTitle.textContent = 'Titles';
titlesList.appendChild(titlesTitle);
titlesTitle.style.fontWeight = 'bold';
titlesTitle.style.fontSize = '12pt';
titlesTitle.style.marginBottom = '10px';
titlesList.style.listStyleType = 'none';
titlesList.style.textAlign = 'left';
for(let i = 0; i < asabenehChallenges2020.author.titles.length; i++){
    const element = asabenehChallenges2020.author.titles[i];
    let titleListItem = document.createElement('li');
    titleListItem.textContent = element[0].concat(element[1]);
    titlesList.appendChild(titleListItem);
}
authorsInfo.appendChild(titlesList);

let skillsList = document.createElement('ul');
let skillsTitle = document.createElement('h6');
skillsTitle.textContent = 'Skills';
skillsList.appendChild(skillsTitle);
skillsTitle.style.fontWeight = 'bold';
skillsTitle.style.fontSize = '12pt';
skillsTitle.style.marginBottom = '10px';
skillsList.style.listStyleType = 'none';
skillsList.style.textAlign = 'left';
for(let i = 0; i < asabenehChallenges2020.author.skills.length; i++){
    const element = asabenehChallenges2020.author.skills[i];
    let skillListItem = document.createElement('li');
    skillListItem.textContent = element;
    skillsList.appendChild(skillListItem);
}
authorsInfo.appendChild(skillsList);

let qualificationsList = document.createElement('ul');
let qualificationsTitle = document.createElement('h6');
qualificationsTitle.textContent = 'Qualifications';
qualificationsList.appendChild(qualificationsTitle);
qualificationsTitle.style.fontWeight = 'bold';
qualificationsTitle.style.fontSize = '12pt';
qualificationsTitle.style.marginBottom = '10px';
qualificationsList.style.listStyleType = 'none';
qualificationsList.style.textAlign = 'left';
for(let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++){
    const element = asabenehChallenges2020.author.qualifications[i];
    let qualificationListItem = document.createElement('li');
    qualificationListItem.textContent = element;
    qualificationsList.appendChild(qualificationListItem);
}
authorsInfo.appendChild(qualificationsList);

authorsInfo.style.display = 'flex';
authorsInfo.style.justifyContent = 'space-between'
secondSection.appendChild(authorsInfo);

let thirdSection = document.createElement('section');
thirdSection.style.width = '80%';
thirdSection.style.marginLeft = '100px'
let keywordsSection = document.createElement('section');
let keywords = document.createElement('h3');
keywords.textContent = 'Keywords';
keywords.style.textAlign = 'left';
thirdSection.appendChild(keywords);
thirdSection.appendChild(keywordsSection);
keywordsSection.style.display = 'flex';
keywordsSection.style.flexWrap = 'wrap';
keywordsSection.style.justifyContent = 'space-between';
let colors = ['coral', 'green', 'red', 'aqua', 'brown', 'grey', 'beige', 'cyan', 'purple', 'pink', 'teal', 'olive', 'indigo', 'orange', 'cadetblue', 'lavender', 'khaki', 'ivory', 'tan', 'aliceblue', 'cornsilk', 'lemonchiffon',
'lime', 'lightblue', 'palegreen', 'sienna', 'thistle', 'tomato', 'seagreen', 'salmon', 'rosybrown', 'plum', 'olivedrab', 'burlywood', 'gold'];
for (let index = 0; index < asabenehChallenges2020.keywords.length; index++) {
    const element = asabenehChallenges2020.keywords[index];
    let keyWord = document.createElement('p');
    keyWord.textContent = "#" + element;
    keyWord.style.fontSize = '9pt';
    keyWord.style.margin = '3px';   
    keyWord.style.backgroundColor = colors[index];
    keyWord.style.borderRadius = '25px';
    keyWord.style.padding = '5px';
    keyWord.style.fontStyle = 'italic';
    keyWord.style.paddingRight = '17px';
    keywordsSection.appendChild(keyWord);
}
outerDiv.appendChild(thirdSection);