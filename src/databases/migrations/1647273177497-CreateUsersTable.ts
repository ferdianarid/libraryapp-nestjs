import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1647273177497 implements MigrationInterface {
    name = 'CreateUsersTable1647273177497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`confirm_password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_58da082103f7e0eacfc37553d32\``);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`bookId\` \`bookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book_details\` DROP FOREIGN KEY \`FK_96de0f366651ae10b8f979debae\``);
        await queryRunner.query(`ALTER TABLE \`book_details\` CHANGE \`booksId\` \`booksId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_58da082103f7e0eacfc37553d32\` FOREIGN KEY (\`bookId\`) REFERENCES \`book_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book_details\` ADD CONSTRAINT \`FK_96de0f366651ae10b8f979debae\` FOREIGN KEY (\`booksId\`) REFERENCES \`books\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_details\` DROP FOREIGN KEY \`FK_96de0f366651ae10b8f979debae\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_58da082103f7e0eacfc37553d32\``);
        await queryRunner.query(`ALTER TABLE \`book_details\` CHANGE \`booksId\` \`booksId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`book_details\` ADD CONSTRAINT \`FK_96de0f366651ae10b8f979debae\` FOREIGN KEY (\`booksId\`) REFERENCES \`books\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`bookId\` \`bookId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_58da082103f7e0eacfc37553d32\` FOREIGN KEY (\`bookId\`) REFERENCES \`book_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
