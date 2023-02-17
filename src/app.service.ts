import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  public soma(num1: number, num2: number): number {
     let soma: number;
     soma = num1 + num2;
     return soma;
  }
}
