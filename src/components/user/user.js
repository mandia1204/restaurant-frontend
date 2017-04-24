import {computedFrom} from 'aurelia-framework';
import {constants} from '../../util/constants';

export class User {

  constructor() {
    this.users = [
      { userName: 'admin1', name: 'Marvin Andia', role: 'admin'},
      { userName: 'admin2', name: 'Edson Andia', role: 'admin'},
      { userName: 'user3', name: 'Pedro el Mono', role: 'user'},
      { userName: 'user4', name: 'Juan Melo', role: 'user'},
      { userName: 'admin3', name: 'Oscar Garcia', role: 'admin'},
      { userName: 'user6', name: 'Pablo Garcia', role: 'user'},
      { userName: 'admin4', name: 'Jose Garcia', role: 'admin'},
      { userName: 'user8', name: 'Rene Garcia', role: 'user'},
      { userName: 'admin5', name: 'Juan Garcia', role: 'admin'},
      { userName: 'user10', name: 'Julian Garcia', role: 'user'},
      { userName: 'user11', name: 'Julia Garcia', role: 'user'},
      { userName: 'user12', name: 'Ramon Garcia', role: 'user'},
      { userName: 'user13', name: 'Josue Garcia', role: 'user'},
      { userName: 'admin6', name: 'Daniel Garcia', role: 'admin'},
      { userName: 'user15', name: 'Josefina Garcia', role: 'user'}
    ];
    this.filteredUsers = [];
    this.rowsPerPage = constants.rowsPerPage;
    this.totalRows = 0;
    this.activePage = 1;
    this.changed = false;
  }

  attached() {
    this._search(1);
  }

  _search(page) {
    const searchFilters = this._getFilters();
    const users = this.users.filter(r=> this._filterUser(r, searchFilters));
    this.totalRows = users.length;

    this._paginate(users, page);
  }

  _paginate(users, page) {
    const next = page === 1 ? 0 : (this.rowsPerPage * page - this.rowsPerPage);
    this.filteredUsers = users.slice(next, next + parseInt(this.rowsPerPage, 10));
  }

  _getFilters() {
    return { userName: this.nameFilter.input.value };
  }

  _filterUser(user, f) {
    return (user.userName.toLowerCase().indexOf(f.userName) !== -1);
  }

  nameChanged(e) {
    this.activePage = 1;//reset pagination
    this._search(1);
    return true;
  }

  pageChanged(e) {
    this._search(e.detail);
  }

  @computedFrom('totalRows')
  get numberOfPages() {
    return Math.ceil(this.totalRows / this.rowsPerPage);
  }
}
