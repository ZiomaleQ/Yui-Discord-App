let errors = require('./../errors.js')

module.exports = {
    name: "ship",
    execute: (msg, args, ships) => {
        if (args[1] === undefined || args[2] === undefined) {
            msg.channel.send(errors.AirShip);
            return;
        }
        let randomNumber = (process.env.SECRET.length * args[1].length * args[2].length) % 100, answer;
        if (args[1] == 'Kirito' && args[2] == 'Asuna' || args[2] == 'Kirito' && args[1] == 'Asuna') randomNumber = 100;
        if (randomNumber >= 0 && randomNumber < 20) answer = ships[0];
        if (randomNumber >= 20 && randomNumber < 40) answer = ships[1];
        if (randomNumber >= 40 && randomNumber < 60) answer = ships[2];
        if (randomNumber >= 60 && randomNumber < 80) answer = ships[3];
        if (randomNumber >= 80 && randomNumber < 100) answer = ships[4];
        if (randomNumber == 100) answer = ':heart: Też tak uważam :heart:';

        msg.channel.send(`:heart: Sprawdzam :heart: \n - ${args[0]} \n - ${args[1]} \n${randomNumber}% - ${answer}`);}
}