import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUserById(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  create(payload: CreateUserDto) {
    return this.userRepository.save(payload);
  }

  update(userId: number, payload: UpdateUserDto) {
    return this.userRepository.update(userId, payload);
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
