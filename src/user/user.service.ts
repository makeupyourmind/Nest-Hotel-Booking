import { Injectable, HttpException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class UserService {

    private saltRounds = 10;

    constructor(@InjectModel('User') 
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}
    
    async create(user: User): Promise<User> {
       try {
            user.password = await this.getHash(user.password);
            const newUser = this.userModel(user);
            return await newUser.save();
       } catch (e) {
            throw new HttpException({
              error: e.message,
            }, 400);
       }
      
    }
    
    async read(user: User): Promise<any>{
       try{
        let response = await this.userModel.findOne({
          email: user.email
        });
        if(response !== null){
           const compare = await this.compareHash(user.password,response.password)
           if(compare){
              const accessToken = this.jwtService.sign(response.toJSON());
              return {
               expiresIn: 3600,
               accessToken,
               user_id: response._id,
               status: 200
             }; 
           }
           else{
              throw new HttpException({
                error: 'Unauthorized cause wrong password or email',
              }, 400);
           }       
        }
        else{
           throw new HttpException({
             error: 'Unauthorized cause wrong password or email',
            }, 400);
        }
      }
      catch(e){
           //return e.message
           //console.log('e.message : ', e.message.error)
          throw new HttpException({
            error: e.message,
          }, 400);
      }
          
    }

    async getHash(password: string | undefined): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
    }
    
    async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
      return bcrypt.compare(password, hash);
    }

    async validateUser(payload: User): Promise<any> {
      return await this.userModel.findById(payload._id);
    }
    
}