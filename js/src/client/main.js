import { start } from '../../../crate/src/lib.rs';

document.getElementById('myBtn').addEventListener('click', () => {
  start('Hello!');
});