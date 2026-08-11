"use client";

import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import type { UserListsViewModel } from "../models/UserListsViewModel.interface";

export const useUserListsViewModel = (): UserListsViewModel => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
      if (errorMessage) {
        setErrorMessage("");
      }
    },
    [errorMessage]
  );

  const addUser = useCallback(() => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setErrorMessage("Ingrese un nombre de usuario");
      return;
    }

    setUsers((currentUsers) => [...currentUsers, trimmedUsername]);
    setUsername("");
  }, [username]);

  const deleteUser = useCallback((index: number) => {
    setUsers((currentUsers) =>
      currentUsers.filter((_, itemIndex) => itemIndex !== index)
    );
  }, []);

  const handleUsernameKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      addUser();
    },
    [addUser]
  );

  return {
    username,
    users,
    errorMessage,
    canAddUser: username.trim().length > 0,
    onUsernameChange,
    addUser,
    deleteUser,
    handleUsernameKeyDown,
  };
};
