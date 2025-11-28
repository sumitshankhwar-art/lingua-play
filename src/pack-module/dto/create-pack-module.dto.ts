export class CreatePackModuleDto {
  courseId: string;
  level: number;
  title: string;
  coverImage?: string;
  sentences?: string[]; 
}
