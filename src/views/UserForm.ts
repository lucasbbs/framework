import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#set-age': this.onSetAgeClick,
      'click:button#set-name': this.onSetNameClick,
      'click:button#save-model': this.onSaveClick,
    };
  }
  onSaveClick = (): void => {
    this.model.save();
  };

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
      <input value="${this.model.get('name')}" type="text">
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age</button>
      <button id="save-model">Save</button>
    </div>
    `;
  }
}
