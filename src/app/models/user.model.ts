export class User{
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;

  constructor(id: number, username: string, firstname: string, lastname: string, email: string) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
