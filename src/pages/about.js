import viteLogo from '/vite.svg'

export function About() {

    const $container = document.createElement('div');

    $container.classList.add('flex', 'justify-center', 'items-center');

    $container.innerHTML = `

    <div class="flex justify-center mt-10">
        <div class="border border-gray-400 flex flex-col md:flex-row items-center m-2 rounded-lg shadow-[0_8px_12px_-0px_rgba(0,0,0,0.3)]">

            <img src="${viteLogo}" alt="about" class="p-5 w-96 md:w-80">

            <div class="max-w-sm">
            <p class="md:text-base font-bold p-5">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus sapien. Aliquam vitae libero placerat, consequat arcu ac, maximus arcu. Vivamus scelerisque libero vitae ex posuere, sit amet mattis quam congue. Quisque sed diam hendrerit, euismod nunc vel, gravida sem. Pellentesque auctor viverra tincidunt. Duis semper elementum libero quis efficitur. Etiam ut ante tellus. Mauris eu lorem ut nisl gravida mollis. Nullam ut mi dictum, hendrerit lectus quis, ultrices leo. Vestibulum congue imperdiet massa, et faucibus urna euismod eget. Maecenas vel ante venenatis, tincidunt elit ut, auctor nunc. Proin non tempor est.
            
            </p>
            </div>

        </div>
    </div>
            
    
    `

    return $container;
}