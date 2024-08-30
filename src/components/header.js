export function Header() {
  const $header = document.createElement('header');

  $header.classList.add("bg-blue-500", "text-white", "text-center", "py-4");

  $header.innerHTML = `
    <h1 class="text-3xl">SPA Vanilla JS</h1>

    <nav>

      <ul class="flex justify-center gap-7 mt-4">

        <li>
          <a href="/" class="hover:underline text-xl">Home</a>
        </li>

        <li>
          <a href="/login" class="hover:underline text-xl">Login</a>
        </li>

        <li>
          <a href="/register" class="hover:underline text-xl">Register</a>
        </li>

        <li>
          <a href="/about" class="hover:underline text-xl">About</a>
        </li>

      </ul>

    </nav>
  `

  return $header
}