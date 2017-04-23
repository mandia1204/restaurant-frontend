export class User {

  constructor() {
    this.users = [
      { userName: 'user1', name: 'Marvin Andia', role: 'admin'},
      { userName: 'user2', name: 'Edson Andia', role: 'admin'},
      { userName: 'user3', name: 'Pedro el Mono', role: 'user'},
      { userName: 'user4', name: 'Juan Melo', role: 'user'},
      { userName: 'user5', name: 'Oscar Garcia', role: 'admin'},
      { userName: 'user6', name: 'Pablo Garcia', role: 'user'},
      { userName: 'user7', name: 'Jose Garcia', role: 'admin'},
      { userName: 'user8', name: 'Rene Garcia', role: 'user'},
      { userName: 'user9', name: 'Juan Garcia', role: 'admin'},
      { userName: 'user10', name: 'Julian Garcia', role: 'user'},
      { userName: 'user11', name: 'Julia Garcia', role: 'user'},
      { userName: 'user12', name: 'Ramon Garcia', role: 'user'},
      { userName: 'user13', name: 'Josue Garcia', role: 'user'},
      { userName: 'user14', name: 'Daniel Garcia', role: 'user'},
      { userName: 'user15', name: 'Josefina Garcia', role: 'user'}
    ];
    this.usersFiltered = [];
    this.rowsPerPage = 3;
    this.totalRows = this.users.length;
    const numberOfPages = Math.ceil(this.totalRows / this.rowsPerPage);
    this.activePage = 1;
    this.numberOfPages = numberOfPages;
  }

  attached() {
    this.updateUsers();
  }

  search(e) {
    this.updateUsers(e.detail);
  }

  updateUsers(page = 1) {
    const next = page === 1 ? 0 : (this.rowsPerPage * page - this.rowsPerPage);
    this.usersFiltered = this.users.slice(next, next + this.rowsPerPage);
  }
}
