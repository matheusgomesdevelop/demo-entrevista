export function getStorage(nome: string) {
  if (nome) {
    return localStorage.getItem(nome);
  }
}
