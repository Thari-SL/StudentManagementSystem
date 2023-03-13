export default class SemesterDTO{
  public regNum:String;
  public subject1:Boolean;
  public subject2:Boolean;
  public subject3:Boolean;
  public subject4:Boolean;
  public subject5:Boolean;
  public subject6:Boolean;
  public subject7:Boolean;
  public subject8:Boolean;
  public subject9:Boolean;


  constructor(regNum: String, subject1: Boolean, subject2: Boolean, subject3: Boolean, subject4: Boolean, subject5: Boolean, subject6: Boolean, subject7: Boolean, subject8: Boolean, subject9: Boolean) {
    this.regNum = regNum;
    this.subject1 = subject1;
    this.subject2 = subject2;
    this.subject3 = subject3;
    this.subject4 = subject4;
    this.subject5 = subject5;
    this.subject6 = subject6;
    this.subject7 = subject7;
    this.subject8 = subject8;
    this.subject9 = subject9;
  }
}
