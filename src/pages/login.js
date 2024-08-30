export function LoginPage() {
  const $container = document.createElement('div');

  $container.innerHTML = `

  <div class="flex justify-center mt-10">

      <div class='w-full bg-white border border-gray-300 rounded-lg shadow-[0_8px_12px_-0px_rgba(0,0,0,0.3)] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>

        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

          <h1 class="text-2xl">Login</h1>

          <form class="mt-4">
            <div class="mb-4">
              <label for="email" class="block text-sm">Email</label>
              <input type="email" id="email" name="email" class="w-full px-2 py-1 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm">Password</label>
              <input type="password" id="password" name="password" class="w-full px-2 py-1 border border-gray-300 rounded-md">
            </div>
            <button type="submit" class="w-full py-1 bg-blue-500 text-white rounded-md">Login</button>
          </form>
          
          </div>
        
        </div>

    </div>
  `;

  return $container;
}