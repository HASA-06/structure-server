class Validate {
  private emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]/;
  private passwordRegExp = /^[A-Za-z0-9]{6,12}$/;
  private nameRegExp = /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{3,10}$/;

  public check(type: string, data: any): boolean {
    switch(type) {
      case 'email':
        return !this.emailRegExp.test(data);
      case 'password':
        return !this.passwordRegExp.test(data);
      case 'name':
        return !this.nameRegExp.test(data);
      case 'text':
        return !(data && (data as string).length !== 0);
      default: 
        return true;
    }
  }
}

export default Validate;