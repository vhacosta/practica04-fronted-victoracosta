export class Student {
  id: number;
  name: string;
  birthdate: string;
  phone: string;
  address: string;
  email: string;

  constructor(id: number, name: string, birthdate: string, phone: string, address: string, email: string) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.phone = phone;
    this.address = address;
    this.email = email;
  }
}
