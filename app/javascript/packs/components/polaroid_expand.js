

const polaroidExpand = ()=> {
  const expand = document.querySelectorAll('.polaroid-wrapper');
  console.log(expand)
  if (expand.length > 0) {
    expand.forEach((polaroid) =>{
    polaroid.addEventListener('click', (event) => {
      console.log(event)
      if (!event.currentTarget.classList.contains('expand')) {
        expand.forEach(polaroid => polaroid.classList.remove("expand"));
      }
        event.currentTarget.classList.toggle("expand");
      })
    })
  }
}



// creer une fonction
// export dans le fichier polaroid
// import dans application JS
// call fucntion


// dans la fonction

// query selector - polaroid_container
// addEventListener - click - eleemetn selectionne
// toggle la class expand in polaroid_container pour expand et reduire polaroid_container

export { polaroidExpand };

