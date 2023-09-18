import CryptoJS from "crypto-js";

// Retorna a string criptografada
export function encrypt(message: string, secret_key: string) {
  return CryptoJS.AES.encrypt(message, secret_key).toString();
}

// Retorna a string descriptografada
export function decrypt(msgEncrypt: string, secret_key: string) {
  const decrypt = CryptoJS.AES.decrypt(msgEncrypt, secret_key);
  return decrypt.toString(CryptoJS.enc.Utf8);
}
