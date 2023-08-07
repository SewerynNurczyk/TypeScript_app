import { types } from "util"

enum Action {
    List = "list",
    Add = "add",
    Remove = "remove",
    Quit = "quit"
  }
  
  type InquirerAnswers = {
    action: Action
  }

  export type {Action, InquirerAnswers}