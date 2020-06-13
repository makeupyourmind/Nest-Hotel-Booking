import { IsBiggerThan } from '../../customValidation/customTicketValidation';

export class FindByParams {

  from: string;

  @IsBiggerThan("from", {
    message: "Param *To* must be bigger than the *from*"
  })
  to: string
}
