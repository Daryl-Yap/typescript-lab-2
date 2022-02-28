import { Greeter } from "./Greeter";

class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(newGreeting: string, newTagName: string = "h1") {
    //now has the value of "h1"
    super(newGreeting);
    this.tagName = newTagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>  ${super.greet(name)} </${this.tagName}>`;
  }
}
