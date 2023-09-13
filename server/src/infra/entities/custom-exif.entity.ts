import { Index, JoinTable, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { AssetEntity } from './asset.entity';

@Entity('custom_exif')
export class CustomExifEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', default: '' })
  tag!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @Index('custom_exif_text_searchable', { synchronize: false })
  @Column({
    type: 'tsvector',
    generatedType: 'STORED',
    asExpression: `TO_TSVECTOR('english',
                         COALESCE(tag, '') || ' ' ||`,
  })
  customExifTextSearchableColumn!: string;
}
