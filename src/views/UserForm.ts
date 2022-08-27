import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#set-age': this.onSetAgeClick,
      'click:button#set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input type="text">
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age</button>
    </div>
    `;
  }
}
