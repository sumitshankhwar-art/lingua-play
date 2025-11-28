export class CreateUserModuleDto {
  email: string;
  displayName?: string;
  photoUrl?: string;
  role?: string;
  password: string;
}
