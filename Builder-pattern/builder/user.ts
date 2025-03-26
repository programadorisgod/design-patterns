export class User {
    private _id: string;
    private _name: string;
    private _lastName: string;
    private _address: string;
    private _generate: string;
    private _phoneNumber: string;
    private _school: string;
    private _favoriteTeam: string;

    constructor(id: string, name: string, lastName: string, address: string, generate: string, phoneNumber: string, school: string, favoriteTeam: string) {
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

    // Setters
    set id(value: string) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set address(value: string) {
        this._address = value;
    }

    set generate(value: string) {
        this._generate = value;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    set school(value: string) {
        this._school = value;
    }

    set favoriteTeam(value: string) {
        this._favoriteTeam = value;
    }
}

