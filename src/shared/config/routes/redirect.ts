import history from './BrowserHistory';

export default function redirect(target:string) {
  history.push(target);
}
