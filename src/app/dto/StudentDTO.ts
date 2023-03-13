export default class StudentDTO{
  public regNum: String;
  public fName: String;
  public lName: String;
  public address: String;
  public birthdate: Date;
  public idNum: String;
  public degree: String


  constructor(regNum: String, fName: String, lName: String, address: String, birthdate: Date, idNum: String, degree: String) {
    this.regNum = regNum;
    this.fName = fName;
    this.lName = lName;
    this.address = address;
   this.birthdate = birthdate;
    this.idNum = idNum;
    this.degree = degree;
  }
}
