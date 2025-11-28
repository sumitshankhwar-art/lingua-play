import { Injectable } from '@nestjs/common';
import { CreatePackModuleDto } from './dto/create-pack-module.dto';
import { UpdatePackModuleDto } from './dto/update-pack-module.dto';
import { Pack } from './pack.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserProgress } from 'src/user-progress/entities/user-progress.entity';
import { UserProgressDocument } from 'src/user-progress/user-progress.schema';
@Injectable()
export class PackModuleService {

   constructor(@InjectModel('Pack') private packModel: Model<Pack>,
      @InjectModel(UserProgress.name) private userProgressModel: Model<UserProgressDocument>,
) {}

  // create(createPackModuleDto: CreatePackModuleDto) {
  //   return 'This action adds a new packModule';
  // }

  async findPacks(courseId: string, level?: number, userId?: string) {
    const filter: any = { courseId };
    if (level) filter.level = level;

    const packs = await this.packModel.find(filter).lean();

    if (!userId) {
      // If user not logged in, just return packs without isCompleted
      return packs.map(pack => ({
        _id: pack._id,
        title: pack.title,
        level: pack.level,
        coverImage: pack.coverImage,
        sentenceCount: pack.sentences.length, // Assuming sentences is an array of IDs
      }));
    }

    // If user is logged in, fetch completed packs
    const completedPacks = await this.userProgressModel
      .find({ userId: new Types.ObjectId(userId), courseId, isCompleted: true })
      .select('packId')
      .lean();

    const completedPackIds = new Set(completedPacks.map(p => p._id.toString()));

    return packs.map(pack => ({
      _id: pack._id,
      title: pack.title,
      level: pack.level,
      coverImage: pack.coverImage,
      sentenceCount: pack.sentences.length,
      isCompleted: completedPackIds.has(pack._id.toString()),
    }));
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} packModule`;
  // }

  // update(id: number, updatePackModuleDto: UpdatePackModuleDto) {
  //   return `This action updates a #${id} packModule`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} packModule`;
  // }
}
