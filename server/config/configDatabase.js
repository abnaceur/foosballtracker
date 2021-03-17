databaseTableList = () => {
    return [{
        name: "player",
        table: "CREATE TABLE IF NOT EXISTS `player` ( \
            `id` INT NOT NULL AUTO_INCREMENT, \
            `name` VARCHAR(90) NOT NULL, \
            `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            `deletedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            PRIMARY KEY (`id`),UNIQUE INDEX `iduser_UNIQUE` (`id` ASC))"
    },
    {
        name: "game",
        table: "CREATE TABLE IF NOT EXISTS `game` ( \
            `id` INT NOT NULL AUTO_INCREMENT, \
            `team1Id` INT NOT NULL, \
            `team2Id` INT NOT NULL, \
            `winner`  VARCHAR(90) NOT NULL, \
            `looser`  VARCHAR(90) NOT NULL, \
            `duration`  VARCHAR(90) NOT NULL, \
            `startedAt`  VARCHAR(90) NOT NULL, \
            `finishedAt`  VARCHAR(90) NOT NULL, \
            PRIMARY KEY (`id`),UNIQUE INDEX `idgame_UNIQUE` (`id` ASC))"
    },
    {
        name: "team",
        table: "CREATE TABLE IF NOT EXISTS `team` ( \
            `id` INT NOT NULL AUTO_INCREMENT, \
            `player1Name` VARCHAR(90) NOT NULL, \
            `player2Name` VARCHAR(90) NOT NULL, \
            `player1pos` VARCHAR(90) NOT NULL, \
            `player2pos` VARCHAR(90) NOT NULL, \
            `pl1Goals` INT NOT NULL, \
            `pl2Goals` INT NOT NULL, \
            `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            PRIMARY KEY (`id`),UNIQUE INDEX `idteam_UNIQUE` (`id` ASC))"
    }
    ];
}

module.exports = {
    databaseTableList
}