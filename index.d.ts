export {};

declare global {
  interface Window {
    user: any,// 👈️ turn off type checking
  }
}