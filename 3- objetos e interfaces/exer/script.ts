// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button



const mobileBtn = document.getElementById('btn-mobile');

function openMenuMobile(event: PointerEvent){

    const nav = document.getElementById("nav");
    const button = event.currentTarget;

    if(button instanceof HTMLElement && nav){
      
       const active = nav.classList.contains("active");

       if(active){

        nav?.classList.remove('active');

        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Abrir Menu");
        
       }else{

        nav?.classList.add('active');

        button.setAttribute("aria-expanded", "true")
        button.setAttribute("aria-label", "Fechar Menu");

       }

    }

}

mobileBtn?.addEventListener('pointerdown', openMenuMobile)
