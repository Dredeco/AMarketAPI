import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Product1695756808074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'product_id',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'code',
                        type: 'string',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'price',
                        type: 'number',
                        isNullable: false
                    },
                    {
                        name: 'sales',
                        type: 'number',
                        isNullable: false
                    },
                    {
                        name: 'stock',
                        type: 'number',
                        isNullable: false
                    },
                    {
                        name: 'favorite',
                        type: 'boolean',
                        isNullable: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}