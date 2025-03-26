import { UserNew } from "./userNew.ts";

interface IBuilder {
  reset(): void;
  setId(id: string): userBuilder;
  setName(name: string): userBuilder;
  setLastName(lastName: string): userBuilder;
  setAddress(address: string): userBuilder;
  setGenerate(generate: string): userBuilder;
  setPhoneNumber(phoneNumber: string): userBuilder;
  setSchool(school: string): userBuilder;
  setFavoriteTeam(favoriteTeam: string): userBuilder;
}

export class userBuilder implements IBuilder {
  private _id: string;
  private _name: string;
  private _lastName: string;
  private _address: string;
  private _generate: string;
  private _phoneNumber: string;
  private _school: string;
  private _favoriteTeam: string;

  public reset(): void {
    this._id = "";
    this._name = "";
    this._lastName = "";
    this._address = "";
    this._generate = "";
    this._phoneNumber = "";
    this._school = "";
    this._favoriteTeam = "";
  }

  public setId(id: string): userBuilder {
    this._id = id;
    return this;
  }

  public setName(name: string): userBuilder {
    this._name = name;
    return this;
  }

  public setLastName(lastName: string): userBuilder {
    this._lastName = lastName;
    return this;
  }

  public setAddress(address: string): userBuilder {
    this._address = address;
    return this;
  }

  public setGenerate(generate: string): userBuilder {
    this._generate = generate;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): userBuilder {
    this._phoneNumber = phoneNumber;
    return this;
  }

  public setSchool(school: string): userBuilder {
    this._school = school;
    return this;
  }

  public setFavoriteTeam(favoriteTeam: string): userBuilder {
    this._favoriteTeam = favoriteTeam;
    return this;
  }

  public build(): UserNew {
    const user = new UserNew(
      this._id,
      this._name,
      this._lastName,
      this._address,
      this._generate,
      this._phoneNumber,
      this._school,
      this._favoriteTeam
    );

    this.reset();

    return user;
  }
}
