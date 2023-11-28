import { ILogin } from "~/infrastructure/interfaces/administration/ILogin";

export class Login implements ILogin {
  name: string;
  password: string;

  constructor(payload?: ILogin) {
    this.name = payload?.name;
    this.password = payload?.password;
  }
}
