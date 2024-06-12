import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findUser(id: number): Promise<User> {
        return this.userRepository.findOneById(id);
    }

    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({ where: { username: username } });
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
