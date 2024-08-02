// HW Objects-JS 


// MINIMUM TASK 1

const car = {
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2020,
    averageSpeed: 80, // км/ч
    fuelTankCapacity: 50, // литры
    fuelConsumption: 7, // топливо на 100 км
    drivers: ['Denys Pronin', 'Jane Smith'],

    // Метод 1
    displayInfo: function() {
        const info = `Manufacturer: ${this.manufacturer}\n` +
                     `Model: ${this.model}\n` +
                     `Year: ${this.year}\n` +
                     `Average Speed: ${this.averageSpeed} km/h\n` +
                     `Fuel Tank Capacity: ${this.fuelTankCapacity} liters\n` +
                     `Fuel Consumption: ${this.fuelConsumption} liters per 100 km\n` +
                     `Drivers: ${this.drivers.join(', ')}\n`;
        document.getElementById('car-info').innerText = info;
    },

    // Метод 2
    addDriver: function(driverName) {
        if (!this.drivers.includes(driverName)) {
            this.drivers.push(driverName);
            document.getElementById('add-driver-result').innerText = `${driverName} has been added to the drivers list.`;
        } else {
            document.getElementById('add-driver-result').innerText = `${driverName} is already in the drivers list.`;
        }
    },

    // Метод 3
    checkDriver: function(driverName) {
        const result = this.drivers.includes(driverName)
            ? `${driverName} is a driver of this car.`
            : `${driverName} is not a driver of this car.`;
        document.getElementById('check-driver-result').innerText = result;
    },

    // Метод 4
    calculateTrip: function(distance) {
        const drivingTime = distance / this.averageSpeed;
        const restTime = Math.floor(drivingTime / 4);
        const totalTime = drivingTime + restTime;
        const fuelNeeded = (this.fuelConsumption / 100) * distance;

        const tripInfo = `For a trip of ${distance} km:\n` +
                         `Total time needed: ${totalTime.toFixed(2)} hours (including ${restTime} hours of rest).\n` +
                         `Fuel needed: ${fuelNeeded.toFixed(2)} liters.\n`;
        document.getElementById('trip-info').innerText = tripInfo;
    }
};

// Functions to interact with car object
function addDriver() {
    const driverName = document.getElementById('new-driver').value;
    car.addDriver(driverName);
}

function checkDriver() {
    const driverName = document.getElementById('check-driver').value;
    car.checkDriver(driverName);
}

function calculateTrip() {
    const distance = parseInt(document.getElementById('trip-distance').value, 10);
    car.calculateTrip(distance);
}



// MEDIUM TASK 2
const time = {
    hours: 20,
    minutes: 59,
    seconds: 45,

    // Метод1
    displayTime: function() {
        console.log(`${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`);
    },

    // Метод 2
    formatTime: function(unit) {
        return unit < 10 ? '0' + unit : unit;
    },

    // Метод 3
    addSeconds: function(seconds) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    },

    // Метод 4
    addMinutes: function(minutes) {
        this.addSeconds(minutes * 60);
    },

    // Метод 5
    addHours: function(hours) {
        this.addSeconds(hours * 3600);
    }
};

// Функция времени
function displayCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.innerText = `${time.formatTime(time.hours)}:${time.formatTime(time.minutes)}:${time.formatTime(time.seconds)}`;
}

// Функция для изменения времени
function changeTime(unit) {
    const value = parseInt(document.getElementById(`change-${unit}`).value, 10);
    if (unit === 'seconds') {
        time.addSeconds(value);
    } else if (unit === 'minutes') {
        time.addMinutes(value);
    } else if (unit === 'hours') {
        time.addHours(value);
    }
    displayCurrentTime();
}

// отображения времени
displayCurrentTime();
