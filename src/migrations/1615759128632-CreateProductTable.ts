import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductTable1615759128632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'valor_custo',
                    type: 'number',
                    default: 0
                },
                {
                    name: 'valor_venda',
                    type: 'number',
                    default: 0
                },
                {
                    name: 'qtd_estoque_min',
                    type: 'number',
                    default: 0
                },
                {
                    name: 'qtd_estoque',
                    type: 'number',
                    default: 0
                },
                {
                    name: 'obs',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'data_cadastro',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'data_alteracao',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'ativo',
                    type: 'boolean',
                    default: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }
}
