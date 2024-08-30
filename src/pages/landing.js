import jsLogo from '/javascript.svg'

export function LandingPage() {
  const $container = document.createElement('div');

  $container.classList.add("w-1/2", "mx-auto", "p-4", "rounded-md", 'w-full', 'flex', 'justify-center');

  $container.innerHTML = `

    <div class="flex flex-col md:flex-row items-center container">
      <img src="${jsLogo}" alt="js" class="w-5/6 md:w-1/6 rounded-lg m-5">

      <div class="w-full flex justify-center items-center">
      <p class="w-6/6 md:w-5/6 font-bold text-xl">
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus sapien. Aliquam vitae libero placerat, consequat arcu ac, maximus arcu. Vivamus scelerisque libero vitae ex posuere, sit amet mattis quam congue. Quisque sed diam hendrerit, euismod nunc vel, gravida sem. Pellentesque auctor viverra tincidunt. Duis semper elementum libero quis efficitur. Etiam ut ante tellus. Mauris eu lorem ut nisl gravida mollis. Nullam ut mi dictum, hendrerit lectus quis, ultrices leo. Vestibulum congue imperdiet massa, et faucibus urna euismod eget. Maecenas vel ante venenatis, tincidunt elit ut, auctor nunc. Proin non tempor est.

      </p>
      </div
      
    </div>
  `;

  return $container
}