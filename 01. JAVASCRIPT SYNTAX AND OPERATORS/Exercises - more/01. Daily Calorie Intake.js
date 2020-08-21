function solve(inputData, workoutsPerWeek) {
    let [sex, weight, height, age]=inputData;
    let calories=0;
    let activityFactor=0;

    if(sex==='m'){
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }else{
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }
    switch (workoutsPerWeek) {
        case 0: activityFactor=0; break;
        case 1: 
        case 2: activityFactor=1.375; break;
        case 3: 
        case 4: 
        case 5: activityFactor=1.55; break;
        case 6: 
        case 7: activityFactor=1.725; break;
        default: activityFactor=1.9; break;
    }
    console.log(Math.round(calories*activityFactor));
}

solve(['m', 86, 185, 25], 3);