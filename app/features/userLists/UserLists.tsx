"use client";

import { Button } from "@/app/components/button/Button";
import Text from "@/app/components/text/Text";
import { useUserListsViewModel } from "./hooks/useUserListsViewModel";

const UserLists = () => {
  const {
    username,
    users,
    errorMessage,
    canAddUser,
    onUsernameChange,
    addUser,
    deleteUser,
    handleUsernameKeyDown,
  } = useUserListsViewModel();

  return (
    <section className="min-h-screen bg-zinc-50 py-16 px-4 text-slate-900 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-zinc-950 dark:ring-slate-800">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">User Lists</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Agrega nuevos nombres de usuario y administra la lista.
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <label htmlFor="username" className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 sm:flex-row sm:items-center">
              <span>Nuevo usuario</span>
              <input
                id="username"
                type="text"
                value={username}
                onChange={onUsernameChange}
                onKeyDown={handleUsernameKeyDown}
                placeholder="Escribe un nombre"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-slate-800 sm:min-w-[320px]"
              />
            </label>

            <Button
              type="button"
              disabled={!canAddUser}
              onClick={addUser}
              className="self-stretch rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Agregar
            </Button>
          </div>

          {errorMessage ? (
            <Text className="text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </Text>
          ) : null}
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <Text className="text-lg font-semibold">Usuarios</Text>
            <Text className="text-sm text-slate-500 dark:text-slate-400">
              {users.length} {users.length === 1 ? "usuario" : "usuarios"}
            </Text>
          </div>

          {users.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {users.map((user, index) => (
                <li
                  key={`${user}-${index}`}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between"
                >
                  <Text className="text-base font-medium text-slate-900 dark:text-slate-100">
                    {user}
                  </Text>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => deleteUser(index)}
                    className="rounded-2xl px-4 py-2 text-sm font-semibold text-white"
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <Text className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              No hay usuarios en la lista.
            </Text>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserLists;
