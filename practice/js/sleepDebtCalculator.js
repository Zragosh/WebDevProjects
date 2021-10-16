const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 10;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 9;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 9;
            break;
        case 'saturday':
            return 10;
            break;
        case 'sunday':
            return 9;
            break;
    }
}

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount of sleep. You're sleeping ${actualSleepHours} hours each night.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed. You're sleeping ${actualSleepHours - idealSleepHours} hours more than needed each night.`);
    } else {
        console.log(`You should get more rest. You're sleeping ${idealSleepHours - actualSleepHours} hours less than needed each night.`);
    }
}

calculateSleepDebt();
