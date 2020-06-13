import {IsBiggerThan} from "../../customValidation/customTicketValidation";

export class CreateTicketDto {
     hall_id: string;

     user_id: string;
     
     from: Date;

     @IsBiggerThan("from", {
         message: "Param *To* must be bigger than the *from*"
     })     
     to: Date;

     title: string;
  }