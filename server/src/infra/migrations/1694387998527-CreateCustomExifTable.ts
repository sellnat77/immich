import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateCustomExifTable1694387998527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          create table if not exists customExif
          (
            id          uuid      default uuid_generate_v4() not null primary key,
            tag         varchar                              not null,
            description varchar                              not null,
            createdAt   timestamp default now()              not null,
            updatedAt   timestamp default now()              not null
          );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE customExif END`);
    }

}
