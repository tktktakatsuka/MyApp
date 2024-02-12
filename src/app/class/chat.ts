export class Chat {
	userName: string="";
	content: string="";

  setUserName(userName:string){
    this.userName = userName;
  }
  setContent(content:string){
    this.content = content;
  }
}