databaseTableList = () => {
    return [{
        name: "Player",
        table: "CREATE TABLE IF NOT EXISTS `player` ( \
            `id` INT NOT NULL AUTO_INCREMENT, \
            `name` VARCHAR(90) NOT NULL, \
            `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            `deletedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, \
            PRIMARY KEY (`id`),UNIQUE INDEX `iduser_UNIQUE` (`id` ASC))"
    }
    ];
}

module.exports = {
    databaseTableList
}