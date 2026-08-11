export interface UserListsViewModel {
  username: string;
  users: string[];
  errorMessage: string;
  canAddUser: boolean;
  onUsernameChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addUser: () => void;
  deleteUser: (index: number) => void;
  handleUsernameKeyDown: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}
