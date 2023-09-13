import { CustomExifEntity } from '@app/infra/entities';

export const ICustomExifRepository = 'ICustomExifRepository';

export interface ICustomExifRepository {
  create(dto: Partial<CustomExifEntity>): Promise<CustomExifEntity>;
  update(tag: string, description: string, dto: Partial<CustomExifEntity>): Promise<CustomExifEntity>;
  delete(tag: string, id: string): Promise<void>;

  getTag(tag: string): Promise<CustomExifEntity | null>;
  getById(id: string): Promise<CustomExifEntity | null>;
  getByDescription(description: string): Promise<CustomExifEntity[]>;
}
