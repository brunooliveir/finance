import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1678321470656 implements MigrationInterface {
    name = 'initial1678321470656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`incomes\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`fees_year\` int NULL, \`fees_month\` int NULL, \`initial_date\` datetime NULL, \`final_date\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`salaries\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`gross\` int NULL, \`net\` int NULL, \`interval\` enum ('monthly', 'weekly', 'daily', 'punctual') NOT NULL DEFAULT 'monthly', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NULL, \`roles\` enum ('admin', 'default') NOT NULL DEFAULT 'default', UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scenarios\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`initial_date\` datetime NULL, \`final_date\` datetime NULL, \`incomesId\` varchar(36) NULL, \`salariesId\` varchar(36) NULL, \`taxesId\` varchar(36) NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`taxes\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`interval\` enum ('monthly', 'weekly', 'daily', 'punctual') NOT NULL DEFAULT 'monthly', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`scenarios\` ADD CONSTRAINT \`FK_3905a99740dd9ea4fc75b2e079e\` FOREIGN KEY (\`incomesId\`) REFERENCES \`incomes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scenarios\` ADD CONSTRAINT \`FK_44ad6c34d16a46e36d35e1c9d36\` FOREIGN KEY (\`salariesId\`) REFERENCES \`salaries\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scenarios\` ADD CONSTRAINT \`FK_2ce1f901c010f872858d03335f4\` FOREIGN KEY (\`taxesId\`) REFERENCES \`taxes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scenarios\` ADD CONSTRAINT \`FK_5a437b4644a5f6310dfd716a6d2\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`scenarios\` DROP FOREIGN KEY \`FK_5a437b4644a5f6310dfd716a6d2\``);
        await queryRunner.query(`ALTER TABLE \`scenarios\` DROP FOREIGN KEY \`FK_2ce1f901c010f872858d03335f4\``);
        await queryRunner.query(`ALTER TABLE \`scenarios\` DROP FOREIGN KEY \`FK_44ad6c34d16a46e36d35e1c9d36\``);
        await queryRunner.query(`ALTER TABLE \`scenarios\` DROP FOREIGN KEY \`FK_3905a99740dd9ea4fc75b2e079e\``);
        await queryRunner.query(`DROP TABLE \`taxes\``);
        await queryRunner.query(`DROP TABLE \`scenarios\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`salaries\``);
        await queryRunner.query(`DROP TABLE \`incomes\``);
    }

}
