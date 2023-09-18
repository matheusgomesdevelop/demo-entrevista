export default function debounce(callback: any, delay: number) {
  let timer: any;
  return (...args: any) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
