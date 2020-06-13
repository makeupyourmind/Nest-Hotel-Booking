
export class CreateUserDto {
    
    //@Length(4)
    readonly password: string;

    //@IsEmail()
    readonly email: string;

    readonly role: string;
  }