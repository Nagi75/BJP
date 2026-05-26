// TypeScript declaration for canvas-confetti module
declare module "canvas-confetti" {
  // The library exports a function that can be called to launch confetti.
  // The exact signature is flexible; we type it as any for simplicity.
  const confetti: (...args: any[]) => Promise<void> | void;
  export default confetti;
}
