class Car {
  make: string; //* =     public make: string, public доступны везде
  private _model: string; //*private доступны только ВНУТРИ класса
  private damages: string[];
  protected run: number; //* Не доступны из-вне, доступны в классе-наследнике

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}


class Truck extends Car{
    //! В наследуемом классе на доступы приватные данные из класса Car, 
    //* Доступны public, protected

    setRun(km: number){
        this.run = km/ 0.6
    }
}


