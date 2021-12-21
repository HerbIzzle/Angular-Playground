import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./MaterialUI/User Table/User";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(userList: User[], searchTerm: string): User[] {
    if (searchTerm.length >= 3) {
      const filterTerm = searchTerm.toLowerCase();
      const filteredCustomerList = [];

      for (const user of userList) {
        const filterFields = [user.firstName, user.lastName, user.birthDate];
        const matchedFields = filterFields.filter(filterField => filterField.toLowerCase().includes(filterTerm));

        if (matchedFields.length > 0) {
          filteredCustomerList.push(user);
        }
      }

      return filteredCustomerList;
    }

    return userList;
  }

}
