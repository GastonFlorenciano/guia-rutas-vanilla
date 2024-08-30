import './style.css'

import { Header } from './components/header';
import { LandingPage } from './pages/landing';
import { LoginPage } from './pages/login';
import { About } from './pages/about';
import { Register } from './pages/register';


const pathname = window.location.pathname;

const $app = document.querySelector("#app");

$app.appendChild(Header());

if(pathname === "/") $app.appendChild(LandingPage());
if(pathname === "/login") $app.appendChild(LoginPage());
if(pathname === "/about") $app.appendChild(About())
if(pathname === "/register") $app.appendChild(Register())

