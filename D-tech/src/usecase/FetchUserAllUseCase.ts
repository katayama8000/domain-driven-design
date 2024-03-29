import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../domain/repositories/UserRepository.interface';
import { UserDto } from './dto/User.dto';

@injectable()
export class FetchUserAllUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async execute(): Promise<UserDto[]> {
    return await this.userRepository.findUserAll();
  }
}
