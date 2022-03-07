import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDashboardTable1646677658054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "dashboard",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "Products",
                    type: "varchar",
                },
                {
                    name: "Transaction",
                    type: "varchar",
                },
                {
                    name: "Status",
                    type: "varchar",
                },
                {
                    name: "Remaining",
                    type: "varchar",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dashboard");
    }

}
