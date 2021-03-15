import {Column, MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateColumnImageUrl1615815376035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('product', new TableColumn({
            name: 'imagem_url',
            type: 'text',
            isNullable: true
        }));        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('product', 'imagem_url');
    }
}
