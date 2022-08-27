import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionViews';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
