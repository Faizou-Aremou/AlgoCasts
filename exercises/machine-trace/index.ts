const mtScreen = document.querySelector('#canvas');
const body = document.querySelector('body');
const run = (ev: any) => {
  const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');
  if (canvas === null) {
    throw new Error('eee');
  }
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (ctx === null) {
    throw new Error('eee');
  }
  const tCarre = () => {
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
  };
};
export function clearCanvas(
  contest2D: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  contest2D.clearRect(0, 0, canvas.width, canvas.height);
}
window.onload = run;
