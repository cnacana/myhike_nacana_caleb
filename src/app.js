import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap';

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import '/src/styles/style.css';

//--------------------------------------------------------------
// Custom global JS code (shared with all pages)can go here.
//--------------------------------------------------------------
import { checkAuthState } from "/src/authentication.js"

// This is an example function. Replace it with your own logic.
function sayHello() {
  checkAuthState()
}
document.addEventListener('DOMContentLoaded', sayHello);
