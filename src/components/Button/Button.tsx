import { ComponentProps } from "react"

type Tvariant= "primary"|"secondry"|"danger"|"success"|"warning";
type Tbutton= ComponentProps<"button"> &{
    variant: Tvariant

}
function Button({children,variant, ...rest}:Tbutton) {

  return (
    <button {...rest} style={{...checkVariant(variant)}}>
        {children}
    </button>
  )
}

export default Button

function checkVariant(variant:Tvariant){

    switch(variant){
        case "primary":
           return {backgroundColor: "blue", color:"white"}
            break
        case "secondry":
            return {backgroundColor:"gray", color: "black"}
            break
        case "success":
            return {backgroundColor:"green", color: "white"}
            break
        case "danger":
            return {backgroundColor:"red", color: "white"}
            break
        case "warning":
            return {backgroundColor:"yellow", color: "white"}
    }
}

