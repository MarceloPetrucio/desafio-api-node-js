import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;   
    
    @ApiProperty()
    @Column()
    valor_custo: number; 

    @ApiProperty()
    @Column()
    valor_venda: number;

    @ApiProperty()
    @Column()
    qtd_estoque_min: number;

    @ApiProperty()
    @Column()
    qtd_estoque: number;

    @ApiProperty()
    @Column({nullable: true})
    obs: string;
    
    @ApiProperty()
    @Column()
    data_cadastro: Date;

    @ApiProperty()
    @Column()
    data_alteracao: Date;

    @ApiProperty()
    @Column({default: true})
    ativo: boolean;

    @ApiProperty()
    @Column({nullable: true})
    imagem_url: string;
}
