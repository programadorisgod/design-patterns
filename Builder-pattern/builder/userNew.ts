export class UserNew {
  private _id: string;
  private _name: string;
  private _lastName: string;
  private _address: string;
  private _generate: string;
  private _phoneNumber: string;
  private _school: string;
  private _favoriteTeam: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    address: string,
    generate: string,
    phoneNumber: string,
    school: string,
    favoriteTeam: string
  ) {
    this._id = id;
    this._name = name;
    this._lastName = lastName;
    this._address = address;
    this._generate = generate;
    this._phoneNumber = phoneNumber;
    this._school = school;
    this._favoriteTeam = favoriteTeam;
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get lastName(): string {
    return this._lastName;
  }

  get address(): string {
    return this._address;
  }

  get generate(): string {
    return this._generate;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get school(): string {
    return this._school;
  }

  get favoriteTeam(): string {
    return this._favoriteTeam;
  }

  public update(changes: Partial<UserNew>): UserNew {
    return new UserNew(
      changes.id ?? this._id,
      changes.name ?? this._name,
      changes.lastName ?? this._lastName,
      changes.address ?? this._address,
      changes.generate ?? this._generate,
      changes.phoneNumber ?? this._phoneNumber,
      changes.school ?? this._school,
      changes.favoriteTeam ?? this._favoriteTeam
    );
  }
}
