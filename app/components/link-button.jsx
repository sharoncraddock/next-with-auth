function LinkButton({text, href}){
  return(
    <a
      href={href}
      className="bg-nectar-extra-color-1 hover:bg-nectar-extra-color-1-hover text-white py-2 px-4 rounded text-sm mt-4 focus:outline-none w-3/5"
    >
      {text}
    </a>
  )
}

export default LinkButton;