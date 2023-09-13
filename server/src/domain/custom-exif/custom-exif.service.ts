import { CustomExifEntity } from '@app/infra/entities';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthUserDto } from '../auth';
import { CustomExifCreateDto, CustomExifCreateResponseDto, CustomExifResponseDto } from './custom-exif.dto';
import { ICustomExifRepository } from './custom-exif.repository';

@Injectable()
export class CustomExifService {
  constructor(
    @Inject(ICustomExifRepository) private repository: ICustomExifRepository,
  ) {}

  async create(dto: CustomExifCreateDto): Promise<CustomExifCreateResponseDto> {
    const entity = await this.repository.create({
      tag: dto.tag || 'Custom Tag',
      description: dto.description,
    });

    return { customTag: this.map(entity) };
  }

  async update(authUser: AuthUserDto, id: string, dto: APIKeyCreateDto): Promise<APIKeyResponseDto> {
    const exists = await this.repository.getById(authUser.id, id);
    if (!exists) {
      throw new BadRequestException('API Key not found');
    }

    const key = await this.repository.update(authUser.id, id, { name: dto.name });

    return this.map(key);
  }

  async delete(authUser: AuthUserDto, id: string): Promise<void> {
    const exists = await this.repository.getById(authUser.id, id);
    if (!exists) {
      throw new BadRequestException('API Key not found');
    }

    await this.repository.delete(authUser.id, id);
  }

  async getById(authUser: AuthUserDto, id: string): Promise<APIKeyResponseDto> {
    const key = await this.repository.getById(authUser.id, id);
    if (!key) {
      throw new BadRequestException('API Key not found');
    }
    return this.map(key);
  }

  async getAll(authUser: AuthUserDto): Promise<APIKeyResponseDto[]> {
    const keys = await this.repository.getByUserId(authUser.id);
    return keys.map((key) => this.map(key));
  }

  private map(entity: CustomExifEntity): CustomExifResponseDto {
    return {
      id: entity.id,
      tag: entity.tag,
      description: entity.description,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
