class Question {
  constructon(content){
    this.content= content
    this.save()

  }

  save(){
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }

  static Find(ID) {
    return this.All()[id-1]
  }

}

Question._All = []
