import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <div id='user-form'></div>
      <div id='user-show'></div>
    </div>
    `;
  }
}
