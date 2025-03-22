import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePowerRingsTable1742664264297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rings',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'power',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'carrier',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'forgedBy',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'imagem',
                        type: 'varchar',
                        isNullable: false
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rings')
    }

}
